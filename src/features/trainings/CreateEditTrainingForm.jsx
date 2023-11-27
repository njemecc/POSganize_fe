//mui components
import { TextField, Stack } from "@mui/material";

//components
import Heading from "../../ui/Heading";
import Button from "../../ui/Button";
import Row from "../../ui/Row";

//form
import { useForm } from "react-hook-form";

//hooks
import { useState } from "react";
import { useCreateTraining } from "./useCreateTraining";
import { useUpdateTraining } from "./useUpdateTraining";
import ScheduleTable from "../schedules/ScheduleTable";

//toast
import { toast } from "react-hot-toast";

const CreateEditTrainingForm = ({ onClose, edit = false, training }) => {
  console.log("training:", training);
  const { createTraining, isCreating } = useCreateTraining();
  const { updateTraining, isUpdating } = useUpdateTraining();

  const [schedules, setSchedules] = useState([]);

  //styles
  const labelStyles = {
    fontSize: "1.5rem",
  };

  const inputStyles = {
    fontSize: "1.5rem",
  };

  const { register, handleSubmit, getValues } = useForm();

  const onSubmit = (data) => {
    const trainingToSend = {
      name: data.name,
      description: data.description,
      price: data.price,
      image: data.image,
    };

    if (edit && training) {
      const updatedTraining = { trainingToSend, trainingId: training.id };
      updateTraining(updatedTraining);
    } else {
      const schedulesWithoutId = schedules.map(({ id, ...rest }) => rest);
      createTraining({ ...trainingToSend, schedule: schedulesWithoutId });
    }

    onClose();
  };

  const addScheduleHandler = () => {
    const formData = getValues();
    const { scheduleDay, scheduleName, scheduleTime } = formData;

    setSchedules((oldSchedules) => [
      ...oldSchedules,
      { scheduleDay, scheduleName, scheduleTime, id: Math.random(1000 * 9) },
    ]);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Heading as="h2">
            {edit ? "Edit Training" : "Create a new Training"}
          </Heading>
        </div>

        <Stack
          spacing={2}
          direction="row"
          sx={{
            marginBottom: 4,
            marginTop: 4,
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <TextField
            label="Name"
            required
            variant="outlined"
            color="primary"
            type="text"
            defaultValue={training?.name}
            InputProps={{
              style: inputStyles,
            }}
            InputLabelProps={{
              style: labelStyles,
            }}
            {...register("name")}
          />
          <TextField
            label="Description"
            required
            variant="outlined"
            color="primary"
            type="text"
            defaultValue={training?.description}
            InputProps={{
              style: inputStyles,
            }}
            InputLabelProps={{
              style: labelStyles,
            }}
            {...register("description")}
          />
        </Stack>

        <Stack
          spacing={2}
          direction="row"
          sx={{
            marginBottom: 4,
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <TextField
            label="Image URL"
            required
            variant="outlined"
            color="primary"
            type="text"
            defaultValue={training?.image}
            InputProps={{
              style: inputStyles,
            }}
            InputLabelProps={{
              style: labelStyles,
            }}
            {...register("image")}
          />
          <TextField
            label="Price"
            required
            variant="outlined"
            color="primary"
            type="text"
            defaultValue={training?.price}
            InputProps={{
              style: inputStyles,
            }}
            InputLabelProps={{
              style: labelStyles,
            }}
            {...register("price")}
          />
        </Stack>
        {!edit && (
          <>
            <Heading as="h3">Schedules</Heading>
            {schedules && (
              <ScheduleTable
                deleteClicked={(id) => {
                  const filteredShedules = schedules.filter(
                    (schedule) => schedule.id !== id
                  );

                  setSchedules(filteredShedules);
                }}
                schedules={schedules}
              />
            )}
            {schedules.length > 7 &&
              toast.error("You can add more than 7 schedules later")}
            <Stack
              sx={{
                marginTop: 3,
              }}
              spacing={2}
              direction="row"
            >
              <TextField
                sx={{ width: "100%" }}
                label="Schedule Name"
                required
                variant="outlined"
                color="primary"
                type="text"
                InputProps={{
                  style: inputStyles,
                }}
                InputLabelProps={{
                  style: labelStyles,
                }}
                {...register("scheduleName")}
              />
            </Stack>
            <Stack
              spacing={2}
              direction="row"
              sx={{
                marginTop: 3,
                marginBottom: 4,
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <TextField
                label="Day"
                required
                variant="outlined"
                color="primary"
                type="text"
                InputProps={{
                  style: inputStyles,
                }}
                InputLabelProps={{
                  style: labelStyles,
                }}
                {...register("scheduleDay")}
              />
              <TextField
                label="Time"
                required
                variant="outlined"
                color="primary"
                type="text"
                defaultValue={training?.price}
                InputProps={{
                  style: inputStyles,
                }}
                InputLabelProps={{
                  style: labelStyles,
                }}
                {...register("scheduleTime")}
              />
            </Stack>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                disabled={schedules.length > 7}
                onClick={addScheduleHandler}
                type="button"
                variation="secondary"
              >
                Add Schedule
              </Button>
            </div>
          </>
        )}
        <Row type="horizontal">
          <Button disabled={isCreating || isUpdating}>
            {" "}
            {edit ? "Update" : "Create"}{" "}
          </Button>
          <Button type="Button" variation="secondary" onClick={() => onClose()}>
            Cancel
          </Button>
        </Row>
      </form>
    </>
  );
};

export default CreateEditTrainingForm;
