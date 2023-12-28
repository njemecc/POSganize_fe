//mui components
import { TextField, Stack, FormControlLabel } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

//components
import Heading from "../../ui/Heading";
import Button from "../../ui/Button";
import Row from "../../ui/Row";

//hooks
import { useState } from "react";
//form
import { useForm } from "react-hook-form";
import { useTrainings } from "../trainings/useTrainings";
import Spinner from "../../ui/Spinner";
import { useParams } from "react-router-dom";
import { useCreateMembership } from "./useCreateMembership";
const CreateMembershipForm = ({ onClose }) => {
  const [startDate, setStartDate] = useState();
  const [expireDate, setExpireDate] = useState();
  const [trainingsToSend, setTrainingsToSend] = useState([]);

  const { trainings, loadingTrainings } = useTrainings();
  const { createMembership, isCreating } = useCreateMembership();
  const { userId } = useParams();

  if (loadingTrainings) return <Spinner />;

  const onSubmit = () => {
    const membershipToSend = {
      startDate,
      expireDate,
      trainings: trainingsToSend,
      userId,
    };

    createMembership(membershipToSend);
    onClose();

    // console.log(membershipToSend);
  };

  //styles
  const labelStyles = {
    fontSize: "1.5rem",
  };

  const inputStyles = {
    fontSize: "1.5rem",
  };

  return (
    <>
      <form style={{ padding: "1rem" }}>
        <div>
          <Heading as="h2">{"Create a new Membership"}</Heading>
        </div>
        <List>
          {trainings.map((training) => (
            <ListItem key={training.name} dense>
              <FormControlLabel
                label={
                  <span style={{ fontSize: "1.5rem" }}>{training.name}</span>
                }
                sx={{ fontSize: 28 }}
                control={
                  <Checkbox
                    sx={{ "& .MuiSvgIcon-root": { fontSize: "2.5rem" } }}
                    onChange={(data) => {
                      if (data.target.checked) {
                        setTrainingsToSend((prevTrainings) => [
                          ...prevTrainings,
                          training,
                        ]);
                      } else {
                        const filteredTrainingsToSend = trainingsToSend.filter(
                          (trainingToSend) =>
                            trainingToSend.name != training.name
                        );

                        setTrainingsToSend(filteredTrainingsToSend);
                      }
                    }}
                  />
                }
              />

              <ListItemText />
            </ListItem>
          ))}
        </List>
        <Row style={{ margin: "2rem 0" }}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <p>Starting Date</p>
            <DatePicker
              onChange={(date) => {
                setStartDate(date.toISOString());
              }}
            />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <p>Expiring date</p>
            <DatePicker
              onChange={(date) => {
                setExpireDate(date.toISOString());
              }}
            />
          </LocalizationProvider>
        </Row>

        <Row type="horizontal">
          <Button onClick={onSubmit} type="button">
            {" "}
            {"Create"}{" "}
          </Button>
          <Button type="Button" variation="secondary" onClick={() => onClose()}>
            Cancel
          </Button>
        </Row>
      </form>
    </>
  );
};

export default CreateMembershipForm;
