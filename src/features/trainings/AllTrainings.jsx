//mui components
import { Box } from "@mui/system";
import TrainingCard from "./TrainingCard";

// my components
import Spinner from "../../ui/Spinner";

//hooks
import { useTrainings } from "./useTrainings";
import { useState } from "react";
import Modal from "../../ui/Modal";
import CreateEditTrainingForm from "./CreateEditTrainingForm";
import Button from "../../ui/Button";

const AllTrainings = () => {
  const { trainings, loadingTrainings } = useTrainings();
  const [showCreate, setShowCreate] = useState(false);

  loadingTrainings && <Spinner />;

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {trainings?.map((training) => (
          <TrainingCard key={training.id} training={training} />
        ))}
      </Box>
      <Button onClick={() => setShowCreate(true)}>Create New Training</Button>
      {showCreate && (
        <Modal onClose={() => setShowCreate(false)}>
          <CreateEditTrainingForm onClose={() => setShowCreate(false)} />
        </Modal>
      )}
    </>
  );
};

export default AllTrainings;
