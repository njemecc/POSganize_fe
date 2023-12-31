import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { TableFooter } from "@mui/material";
import Paper from "@mui/material/Paper";
import { useUsers } from "./useUsers";
import { useSearchParams } from "react-router-dom";
//components
import Spinner from "../../ui/Spinner";
import Menus from "../../ui/Menus";
import UserRow from "./UserRow";
import Pagination from "../../ui/Pagination";

export default function UsersTable() {
  const { users, loadingUsers, numberOfUsers } = useUsers();

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
                <UserRow key={user.id} user={user} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TableFooter sx={{ margin: "0 auto" }}>
          <Pagination count={Number(numberOfUsers)} />
        </TableFooter>
      </Menus>
    </>
  );
}
