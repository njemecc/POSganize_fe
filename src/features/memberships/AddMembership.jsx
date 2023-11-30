//components
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateMembershipForm from "./CreateMembershipForm";

//hooks
import { useState } from "react";
const AddMembership = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpenModal(true)}>
        Create New Membership
      </Button>
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <CreateMembershipForm
            onClose={() => {
              setIsOpenModal(false);
            }}
          />
        </Modal>
      )}
    </div>
  );
};

export default AddMembership;
