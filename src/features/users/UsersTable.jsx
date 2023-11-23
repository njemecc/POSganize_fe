import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useUsers } from "./useUsers";

//components
import Spinner from "../../ui/Spinner";
import Menus from "../../ui/Menus";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";
import CreateUserForm from "./CreateUserForm";

//hooks
import { useState, useEffect } from "react";

//icons
import { HiPencil, HiTrash } from "react-icons/hi2";
import { useDeleteUser } from "./useDeleteUser";
import { getAllUsers, isUserActive } from "../../services/apiUsers";

export default function UsersTable() {
  const { users, loadingUsers } = useUsers();

  const { deleteUser, isDeleting } = useDeleteUser();

  const [showDeleting, setShowDeleting] = useState(false);

  const [showEdit, setShowEdit] = useState(false);
  const [whatModal, setWhatModal] = useState("");

  if (loadingUsers) return <Spinner />;

  return (
    <>
      <Menus>
        <TableContainer component={Paper}>
          <Table
            sx={{ minWidth: 660, minHeight: 500 }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontSize: 15, fontWeight: 600 }}>
                  First Name
                </TableCell>
                <TableCell sx={{ fontSize: 15, fontWeight: 600 }} align="left">
                  Last Name
                </TableCell>
                <TableCell sx={{ fontSize: 15, fontWeight: 600 }} align="left">
                  Email
                </TableCell>
                <TableCell sx={{ fontSize: 15, fontWeight: 600 }} align="left">
                  Number
                </TableCell>
                <TableCell sx={{ fontSize: 15, fontWeight: 600 }} align="left">
                  Active
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
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
                    true
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
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Menus>
    </>
  );
}
