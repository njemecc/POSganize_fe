//styles
import styled from "styled-components";

//components
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
//icons
import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

const UsersRow = ({ user }) => {
  const { firstName, lastName, email, phoneNumber, registrationDate } = user;

  return (
    <>
      <Table.Row>
        <Img src="/images/ja.png" />
        <Cabin>{firstName}</Cabin>
        <Cabin>{lastName}</Cabin>
        <Cabin>{email}</Cabin>
        <Price>{phoneNumber}</Price>
      </Table.Row>
      {/* <Menus.Menu>
        <Menus.Toggle id={cabinId} />
        <Menus.List id={cabinId}>
          <Menus.Button icon={<HiSquare2Stack />} onClick={handleDuplicate}>
            Duplicate
          </Menus.Button>
          <Menus.Button
            icon={<HiPencil />}
            onClick={() => setShowForm((show) => !show)}
          >
            Edit
          </Menus.Button>
          <Menus.Button
            icon={<HiTrash />}
            onClick={() => setShowDeleting(true)}
          >
            Delete
          </Menus.Button>
        </Menus.List>
      </Menus.Menu>
      {showDeleting && (
        <Modal>
          <ConfirmDelete
            onConfirm={() => deleteCabin(cabinId)}
            disabled={isDeleting}
            closeModal={() => setShowDeleting(false)}
          />
        </Modal>
      )}
      {showForm && (
        <Modal>
          <CreateCabinForm
            cabinToEdit={cabin}
            onClose={() => {
              setShowForm(false);
            }}
          />
        </Modal> )}*/}
    </>
  );
};

export default UsersRow;
