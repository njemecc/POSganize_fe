//components
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import CreateUserForm from "./CreateUserForm";
import { TableRow, TableCell } from "@mui/material";
import Menus from "../../ui/Menus";
import Tag from "../../ui/Tag";

//icons
import { HiEye, HiPencil, HiTrash } from "react-icons/hi2";

//hooks
import { useState, useEffect } from "react";
import { useDeleteUser } from "./useDeleteUser";
import { useNavigate } from "react-router-dom";

const UserRow = ({ user }) => {
  const { deleteUser, isDeleting } = useDeleteUser();
  const [showDeleting, setShowDeleting] = useState(false);

  const [showEdit, setShowEdit] = useState(false);
  const [whatModal, setWhatModal] = useState("");

  const navigate = useNavigate();

  //resili smo ovo kasnije na backend-u , gde user ima active property
  // const { isUserActive, isLoadingUserActive } = useIsActiveUser(user.id);

  return (
    <TableRow
      key={user.email}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell sx={{ fontSize: 13.5 }} component="th" scope="row">
        {user.firstName}
      </TableCell>
      <TableCell sx={{ fontSize: 13.5 }} align="left">
        {user.lastName}
      </TableCell>
      <TableCell sx={{ fontSize: 13.5 }} align="left">
        {user.email}
      </TableCell>
      <TableCell sx={{ fontSize: 13.5 }} align="left">
        {user.phoneNumber}
      </TableCell>
      <TableCell sx={{ fontSize: 13.5 }} align="left">
        {" "}
        {user.active === null ? (
          <Tag type="yellow">not a member</Tag>
        ) : user.active ? (
          <Tag type="green">active</Tag>
        ) : (
          <Tag type="red">not active</Tag>
        )}
      </TableCell>
      <Menus.Menu>
        <Menus.Toggle id={user.id} />
        <Menus.List id={user.id}>
          <Menus.Button
            onClick={() => {
              setShowEdit(true);
              setWhatModal(user.id);
            }}
          >
            {" "}
            <HiPencil /> Edit
          </Menus.Button>
          <Menus.Button
            onClick={() => {
              setWhatModal(user.id);
              setShowDeleting(true);
            }}
          >
            <HiTrash />
            Delete
          </Menus.Button>
          <Menus.Button
            onClick={() => {
              navigate(`/users/${user.id}`);
            }}
          >
            <HiEye />
            Details
          </Menus.Button>
        </Menus.List>
      </Menus.Menu>
      {showDeleting && whatModal === user.id ? (
        <Modal onClose={() => setShowDeleting(false)}>
          <ConfirmDelete
            onConfirm={() => deleteUser(user.id)}
            disabled={isDeleting}
            closeModal={() => setShowDeleting(false)}
          />
        </Modal>
      ) : (
        ""
      )}
      {showEdit && whatModal === user.id ? (
        <Modal onClose={() => setShowEdit(false)}>
          <CreateUserForm
            onClose={() => setShowEdit(false)}
            edit={true}
            user={user}
          />
        </Modal>
      ) : (
        ""
      )}
    </TableRow>
  );
};

export default UserRow;
