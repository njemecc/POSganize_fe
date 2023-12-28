import "./TrainingCardV2.css";

import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import { Card } from "@mui/material";

//redux
import { cartActions } from "../../store/slices/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { USER } from "../../utils/roles";
import { useUser } from "../authentication/useUser";

const TrainingCardv2 = ({ training }) => {
  const { id, name, image, price, description } = training;
  const { role } = useUser();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addTrainingToCartHandler = (e) => {
    e.stopPropagation();
    dispatch(cartActions.addToCart(training));
  };

  return (
    <Card
      style={{ backgroundImage: `url(${image})` }}
      class="card"
      onClick={() => navigate(`/trainings/${id}`)}
    >
      <div class="card-content">
        <h2 class="card-title">{name}</h2>
        <p className="card-body">{`${description.substring(0, 150)}...`}</p>
        <p class="card-body">{price}$</p>
        {role === USER && (
          <Button onClick={addTrainingToCartHandler}>Subscribe</Button>
        )}
      </div>
    </Card>
  );
};

export default TrainingCardv2;
