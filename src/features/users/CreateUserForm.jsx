//mui components
import { TextField, Stack } from "@mui/material";

//components
import Heading from "../../ui/Heading";
import Button from "../../ui/Button";
import Row from "../../ui/Row";

//form
import { useForm } from "react-hook-form";
//custom hooks
import { useCreateUser } from "./useCreateUser";
import { useUpdateUser } from "./useUpdateUser";

const CreateUserForm = ({ onClose, edit = false, user }) => {
  //styles
  const labelStyles = {
    fontSize: "1.5rem",
  };

  const inputStyles = {
    fontSize: "1.5rem",
  };

  const { register, handleSubmit } = useForm();

  const { createUser, isCreating } = useCreateUser();

  const { updateUser, isUpdating } = useUpdateUser();

  const onSubmit = (data) => {
    if (edit && user) {
      const updatedUser = { data, userId: user.id };
      updateUser(updatedUser);
    } else {
      createUser(data);
    }

    onClose();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Heading as="h2">{edit ? "Edit User" : "Create a new User"}</Heading>
        </div>

        <Stack
          spacing={2}
          direction="row"
          sx={{ marginBottom: 4, marginTop: 4 }}
        >
          <TextField
            label="First Name"
            required
            variant="outlined"
            color="primary"
            type="text"
            defaultValue={user?.firstName}
            InputProps={{
              style: inputStyles,
            }}
            InputLabelProps={{
              style: labelStyles,
            }}
            {...register("firstName")}
          />
          <TextField
            label="Last Name"
            required
            variant="outlined"
            color="primary"
            type="text"
            defaultValue={user?.lastName}
            InputProps={{
              style: inputStyles,
            }}
            InputLabelProps={{
              style: labelStyles,
            }}
            {...register("lastName")}
          />
        </Stack>

        <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
          <TextField
            label="Email"
            required
            variant="outlined"
            color="primary"
            type="email"
            defaultValue={user?.email}
            InputProps={{
              style: inputStyles,
            }}
            InputLabelProps={{
              style: labelStyles,
            }}
            {...register("email")}
          />
          {edit ? (
            ""
          ) : (
            <TextField
              label="Password"
              required
              variant="outlined"
              color="primary"
              type="password"
              InputProps={{
                style: inputStyles,
              }}
              InputLabelProps={{
                style: labelStyles,
              }}
              {...register("password")}
            />
          )}
        </Stack>
        <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
          <TextField
            label="Phone Number"
            required
            variant="outlined"
            color="primary"
            type="number"
            defaultValue={user?.phoneNumber}
            InputProps={{
              style: inputStyles,
            }}
            InputLabelProps={{
              style: labelStyles,
            }}
            {...register("phoneNumber")}
          />
        </Stack>
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

export default CreateUserForm;
