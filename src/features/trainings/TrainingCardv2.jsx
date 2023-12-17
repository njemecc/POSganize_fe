import "./TrainingCardV2.css";

import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import { Card } from "@mui/material";

const TrainingCardv2 = ({ training }) => {
  const { id, name, image, price } = training;
  const navigate = useNavigate();
  return (
    <Card
      style={{ backgroundImage: `url(${image})` }}
      class="card"
      onClick={() => navigate(`/trainings/${id}`)}
    >
      <div class="card-content">
        <h2 class="card-title">{name}</h2>
        <p class="card-body">{price}$</p>
        <Button>Subscribe</Button>
      </div>
    </Card>
  );
};

export default TrainingCardv2;
