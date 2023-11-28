//components
import Heading from "../../ui/Heading";
import { Stack } from "@mui/system";
import { TextField } from "@mui/material";
import Row from "../../ui/Row";
import Button from "../../ui/Button";
//form
import { useForm } from "react-hook-form";

const CreateScheduleForm = ({ onClose }) => {
  const { register, handleSubmit } = useForm();

  const labelStyles = {
    fontSize: "1.5rem",
  };

  const inputStyles = {
    fontSize: "1.5rem",
  };

  const onSubmit = (data) => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Heading as="h2">Add new schedule</Heading>
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
          InputProps={{
            style: inputStyles,
          }}
          InputLabelProps={{
            style: labelStyles,
          }}
          {...register("scheduleTime")}
        />
      </Stack>
      <Row type="horizontal">
        <Button>Add</Button>
        <Button type="Button" variation="secondary" onClick={() => onClose()}>
          Cancel
        </Button>
      </Row>
    </form>
  );
};

export default CreateScheduleForm;
