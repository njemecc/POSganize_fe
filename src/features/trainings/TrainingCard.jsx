import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

//icons
import { HiPencil, HiTrash } from "react-icons/hi2";

//components
import ConfirmDelete from "../../ui/ConfirmDelete";
import Modal from "../../ui/Modal";
import CreateEditTrainingForm from "./CreateEditTrainingForm";

//hooks
import { useState } from "react";
import { useDeleteTraining } from "./useDeleteTraining";

//router
import { useNavigate } from "react-router-dom";

export default function TrainingCard({ training }) {
  const { id, name, image, price, description } = training;
  const { deleteTraining, isDeleting } = useDeleteTraining();

  const [showDeleting, setShowDeleting] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [whatModal, setWhatModal] = useState("");

  const navigate = useNavigate();

  return (
    <>
      <Card sx={{ maxWidth: 345, marginTop: 10, width: "33%" }}>
        <CardActionArea onClick={() => navigate(`/trainings/${id}`)}>
          <CardMedia component="img" height="200" image={image} alt={name} />
          <CardContent>
            <Typography gutterBottom variant="h4" component="div">
              {name}
            </Typography>
            {/* <Typography variant="body1" color="text.secondary">
              {description
                ? description
                : "Kick box is a great sport for upgrading your fighting skills and boost your confidance!"}
            </Typography> */}
            <Typography variant="h5">{price}$</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            onClick={() => {
              setShowEdit(true);
              setWhatModal(id);
            }}
            variant="contained"
            sx={{ fontSize: "1.3rem" }}
          >
            <HiPencil />
          </Button>
          <Button
            sx={{ fontSize: "1.3rem" }}
            onClick={() => {
              setShowDeleting(true);
              setWhatModal(id);
            }}
            disabled={isDeleting}
            variant="contained"
            color="error"
          >
            <HiTrash />
          </Button>
        </CardActions>
      </Card>
      {showDeleting && whatModal === id ? (
        <Modal onClose={() => setShowDeleting(false)}>
          <ConfirmDelete
            onConfirm={() => deleteTraining(id)}
            disabled={isDeleting}
            closeModal={() => setShowDeleting(false)}
          />
        </Modal>
      ) : (
        ""
      )}
      {showEdit && whatModal === id ? (
        <Modal onClose={() => setShowEdit(false)}>
          <CreateEditTrainingForm
            onClose={() => setShowEdit(false)}
            edit={true}
            training={training}
          />
        </Modal>
      ) : (
        ""
      )}
    </>
  );
}
