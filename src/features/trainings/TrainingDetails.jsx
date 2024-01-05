//hooks
import { useGetTrainingById } from "./useGetTrainingById";
import { useState } from "react";
import { useDeleteTraining } from "./useDeleteTraining";
//components
import Heading from "../../ui/Heading";
import Spinner from "../../ui/Spinner";
import Row from "../../ui/Row";
import { Button } from "@mui/material";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import ScheduleTable from "../schedules/ScheduleTable";
import CreateScheduleForm from "../schedules/CreateScheduleForm";
import CreateEditTrainingForm from "./CreateEditTrainingForm";
//icons
import { HiPencil, HiTrash } from "react-icons/hi2";
import { useDeleteSchedule } from "../schedules/useDeleteSchedule";

import { useUser } from "../authentication/useUser";
import { ADMIN } from "../../utils/roles";

const TrainingDetails = () => {
  const { training, loadingTraining } = useGetTrainingById();
  const { deleteTraining, isDeleting } = useDeleteTraining();
  const { deleteSchedule, isDeletingSchedule } = useDeleteSchedule();

  //authorization
  const { role, isLoading } = useUser();

  const [showDeleting, setShowDeleting] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [whatModal, setWhatModal] = useState("");

  const [showAddSchedule, setShowAddSchedule] = useState(false);

  isLoading && <Spinner />;

  return (
    <div>
      <Heading as="h0">{training?.name.toUpperCase()}</Heading>

      <Row
        type="horizontal"
        style={{ marginTop: "5rem", display: "flex", alignItems: "flex-start" }}
      >
        <div style={{ width: "50%", height: "40rem" }}>
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "15px",
              transition: "transform 0.3s ease-in-out",
            }}
            src={training?.image}
          />
        </div>

        <Row
          style={{
            backgroundColor: "f9fafb",
            padding: "1.5rem",
            width: "45%",
            boxShadow:
              "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          }}
        >
          <Heading as="h5">{training?.description}</Heading>
        </Row>
      </Row>
      <Row
        style={{
          display: "flex",
          alignItems: "center",
          gap: "5rem",
          width: "50%",
          marginRight: "auto",
          marginTop: "2rem",
        }}
      >
        {role === "ROLE_ADMIN" && (
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Button
              onClick={() => {
                setShowEdit(true);
                setWhatModal(training?.id);
              }}
              variant="contained"
              sx={{ fontSize: "2rem", width: "10rem", height: "3rem" }}
            >
              <HiPencil />
            </Button>
            <Button
              sx={{ fontSize: "2rem", width: "10rem", height: "3rem" }}
              onClick={() => {
                setShowDeleting(true);
                setWhatModal(training?.id);
              }}
              variant="contained"
              color="error"
            >
              <HiTrash />
            </Button>
          </div>
        )}
      </Row>
      <Row style={{ marginTop: "8rem" }}>
        <Heading as="h3">Schedules</Heading>
        <ScheduleTable
          schedules={training?.schedule}
          deleteClicked={deleteSchedule}
          trainingDetails={true}
        />
        {role === ADMIN && (
          <Button
            onClick={() => setShowAddSchedule(true)}
            variant="contained"
            type="button"
            sx={{ fontSize: "1.2rem", width: "22rem", margin: "auto" }}
          >
            Add new schedule
          </Button>
        )}
      </Row>
      {showAddSchedule ? (
        <Modal onClose={() => setShowAddSchedule(false)}>
          <CreateScheduleForm onClose={() => setShowAddSchedule(false)} />{" "}
        </Modal>
      ) : (
        ""
      )}
      {showDeleting && whatModal === training?.id ? (
        <Modal
          onClose={() => {
            setShowDeleting(false);
          }}
        >
          <ConfirmDelete
            singleTraining={true}
            onConfirm={() => deleteTraining(training?.id)}
            closeModal={() => {
              setShowDeleting(false);
            }}
          />
        </Modal>
      ) : (
        ""
      )}
      {showEdit && whatModal === training?.id ? (
        <Modal onClose={() => setShowEdit(false)}>
          <CreateEditTrainingForm
            onClose={() => {
              setShowEdit(false);
            }}
            edit={true}
            training={training}
          />
        </Modal>
      ) : (
        ""
      )}
    </div>
  );
};

export default TrainingDetails;
