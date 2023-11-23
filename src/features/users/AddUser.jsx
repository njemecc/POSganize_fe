//components
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateUserForm from "./CreateUserForm";

//hooks
import { useState } from "react";
const AddUser = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpenModal(true)}>Create New User</Button>
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <CreateUserForm
            onClose={() => {
              setIsOpenModal(false);
            }}
          />
        </Modal>
      )}
    </div>
  );
};

export default AddUser;
