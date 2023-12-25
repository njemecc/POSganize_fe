//components
import { Stack } from "@mui/system";
import { TextField } from "@mui/material";
import Heading from "../../ui/Heading";

//hooks
import { useRef } from "react";
import Button from "../../ui/Button";

const CreateRuleForm = () => {
  const labelStyles = {
    fontSize: "1.5rem",
  };

  const inputStyles = {
    fontSize: "1.5rem",
  };

  //ref variables
  const nameRef = useRef()
  const descriptionRef = useRef()
  const imageRef = useRef()

  const formSubmitHandler = (e) => {
    e.preventDefault()
   //create logic
   
  }

  return (
    
      <form onSubmit={formSubmitHandler} style={{width:"30rem"}}>
        <div>
          <Heading as="h2">{"Create a new Rule"}</Heading>
        </div>
        <Stack
          sx={{
            marginTop: 3,
          }}
          spacing={1}
          direction="row"
        >
          <TextField
            sx={{ width: "100%" }}
            label="Rule Name"
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
            inputRef={nameRef}
          />
        </Stack>
        <Stack
          sx={{
            marginTop: 3,
          }}
          spacing={1}
          direction="row"
        >
          <TextField
            sx={{ width: "100%" }}
            label="Description"
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
            inputRef={descriptionRef}
          />
        </Stack>    
        <Stack
          sx={{
            marginTop: 3,
          }}
          spacing={1}
          direction="row"
        >
          <TextField
            sx={{ width: "100%" }}
            label="Image URL"
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
            inputRef={imageRef}
          />
        </Stack>    
        <Stack sx={{
            marginTop: 3,
          }}
        
          >
            <Button type="Submit" >Create</Button>
        </Stack>
      </form>
    
  );
};

export default CreateRuleForm;
