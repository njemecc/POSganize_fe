//mui components
import { TextField, Stack } from "@mui/material";
import { Avatar } from "@mui/material";
//components
import Heading from "../../ui/Heading";
import Button from "../../ui/Button";
import Row from "../../ui/Row";

//functions
import { readFileAsBlob } from "../../utils/helpers";

//form
import { useForm } from "react-hook-form";
//custom hooks
import { useCreateUser } from "./useCreateUser";
import { useUpdateUser } from "./useUpdateUser";
import { useState } from "react";

const CreateUserForm = ({ onClose, edit = false, user }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

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

  const onSubmit = async (data) => {
    const image = await readFileAsBlob(selectedFile);
    if (edit && user) {
      const updatedUser = image
        ? { data: { ...data, image: Array.from(image) }, userId: user.id }
        : { data, userId: user.id };

      updateUser(updatedUser);
    } else {
      createUser({ ...data, image: Array.from(image) });
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

          <TextField
            disabled={edit ? true : false}
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
          <label
            htmlFor="avatarInput"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              textAlign: "center",
              padding: "0.5rem",

              margin: "0 auto",
            }}
          >
            <Avatar style={{ width: "4rem", height: "4rem" }} src="" />
            {selectedFile && (
              <p style={{ fontSize: "1rem" }}>
                Selected file: {selectedFile.name}{" "}
              </p>
            )}
            <input
              id="avatarInput"
              type="file"
              accept=".jpg, .jpeg, .png, .gif"
              style={{
                display: "none",
              }}
              onChange={handleFileChange}
            />
          </label>
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
