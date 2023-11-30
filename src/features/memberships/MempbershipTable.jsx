import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { TableFooter } from "@mui/material";
import Paper from "@mui/material/Paper";
import { useGetMembershipByUserId } from "./useGetMembershipByUserId";

//components
import Spinner from "../../ui/Spinner";
import Menus from "../../ui/Menus";
import MembershipRow from "./MembershipRow";
import Empty from "../../ui/Empty";

import Pagination from "../../ui/Pagination";

export default function MembershipTable() {
  const { memberships, loadingMemberships } = useGetMembershipByUserId();

  console.log(memberships);

  if (loadingMemberships) return <Spinner />;

  if (!loadingMemberships && memberships.length === 0)
    return <Empty resource="memberships" />;

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
                  Trainings
                </TableCell>
                <TableCell sx={{ fontSize: 15, fontWeight: 600 }} align="left">
                  Start Date
                </TableCell>
                <TableCell sx={{ fontSize: 15, fontWeight: 600 }} align="left">
                  Expire Date
                </TableCell>
                <TableCell sx={{ fontSize: 15, fontWeight: 600 }} align="left">
                  Price
                </TableCell>
                <TableCell sx={{ fontSize: 15, fontWeight: 600 }} align="left">
                  Active
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {memberships?.map((membership) => (
                <MembershipRow key={membership.id} membership={membership} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TableFooter sx={{ margin: "0 auto" }}>
          {/* <Pagination count={Number(numberOfUsers)} /> */}
        </TableFooter>
      </Menus>
    </>
  );
}
