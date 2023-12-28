//components
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateMembershipForm from "./CreateMembershipForm";

//hooks
import { useState } from "react";
import { useUser } from "../authentication/useUser";
import { ADMIN } from "../../utils/roles";
const AddMembership = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { role } = useUser();

  return (
    <div>
      {role === ADMIN && (
        <Button onClick={() => setIsOpenModal(true)}>
          Create New Membership
        </Button>
      )}
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
