import TableRow from "@mui/material/TableRow";
import { TableCell } from "@mui/material";

import { HiTrash } from "react-icons/hi2";
import Button from "../../ui/Button";

const ScheduleItem = ({ schedule, deleteClicked }) => {
  return (
    <TableRow
      sx={{
        "&:last-child td, &:last-child th": { border: 0 },
      }}
    >
      <TableCell style={{ fontSize: "1.1rem" }} component="th" scope="row">
        {schedule.scheduleName}
      </TableCell>
      <TableCell style={{ fontSize: "1.1rem" }} align="right">
        {schedule.scheduleDay}
      </TableCell>
      <TableCell style={{ fontSize: "1.1rem" }} align="right">
        {schedule.scheduleTime}
      </TableCell>
      <TableCell style={{ fontSize: "1.1rem" }} align="right">
        <Button type="button" size="small">
          <HiTrash onClick={() => deleteClicked(schedule.id)} />
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default ScheduleItem;
