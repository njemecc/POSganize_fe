import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ScheduleItem from "./ScheduleItem";
import { useUser } from "../authentication/useUser";
import { ADMIN } from "../../utils/roles";

export default function ScheduleTable({
  schedules,
  deleteClicked,
  trainingDetails,
}) {
  //authorization
  const { role } = useUser();

  const tableCellStyles = { fontSize: trainingDetails ? "1.5rem" : "1.2rem" };

  return (
    <TableContainer style={{ marginTop: "2rem" }} component={Paper}>
      <Table
        sx={{ minWidth: 650 }}
        size={trainingDetails ? "big" : "small"}
        aria-label="a dense table"
      >
        <TableHead>
          <TableRow>
            <TableCell style={tableCellStyles}>Name</TableCell>
            <TableCell style={tableCellStyles} align="right">
              Day
            </TableCell>
            <TableCell style={tableCellStyles} align="right">
              Time
            </TableCell>
            {role === ADMIN && (
              <TableCell style={tableCellStyles} align="right">
                Actions
              </TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {schedules?.map((schedule, i) => (
            <ScheduleItem
              deleteClicked={deleteClicked}
              schedule={schedule}
              key={i}
              big={trainingDetails ? true : false}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
