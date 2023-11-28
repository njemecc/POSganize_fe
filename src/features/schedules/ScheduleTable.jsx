import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ScheduleItem from "./ScheduleItem";

export default function ScheduleTable({ schedules, deleteClicked }) {
  return (
    <TableContainer style={{ marginTop: "2rem" }} component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell style={{ fontSize: "1.2rem" }}>Name</TableCell>
            <TableCell style={{ fontSize: "1.2rem" }} align="right">
              Day
            </TableCell>
            <TableCell style={{ fontSize: "1.2rem" }} align="right">
              Time
            </TableCell>
            <TableCell style={{ fontSize: "1.2rem" }} align="right">
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {schedules?.map((schedule, i) => (
            <ScheduleItem
              deleteClicked={deleteClicked}
              schedule={schedule}
              key={i}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
