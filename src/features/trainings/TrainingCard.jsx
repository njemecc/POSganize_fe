import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

//styles
import "./TrainingCard.css";

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
import { useUser } from "../authentication/useUser";
import { ADMIN } from "../../utils/roles";

export default function TrainingCard({ training }) {
  const { id, name, image, price } = training;

  // const { deleteTraining, isDeleting } = useDeleteTraining();

  //authorization
  // const { role } = useUser();

  // const [showDeleting, setShowDeleting] = useState(false);
  // const [showEdit, setShowEdit] = useState(false);
  // const [whatModal, setWhatModal] = useState("");

  const navigate = useNavigate();

  return (
    <Card className="training-card">
      <CardActionArea onClick={() => navigate(`/trainings/${id}`)}>
        <CardMedia component="img" height="200" image={image} alt={name} />
        <CardContent className="card-content">
          <Typography gutterBottom variant="h4" component="div">
            {name}
          </Typography>
          <Typography variant="h5">{price}$</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
