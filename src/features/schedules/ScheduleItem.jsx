import TableRow from "@mui/material/TableRow";
import { TableCell } from "@mui/material";

import { HiTrash } from "react-icons/hi2";
import Button from "../../ui/Button";
import { useUser } from "../authentication/useUser";
import { ADMIN } from "../../utils/roles";

const ScheduleItem = ({ schedule, deleteClicked, big }) => {
  const { role } = useUser();

  const tableCellStyles = { fontSize: big ? "1.4rem" : "1.1rem" };

  return (
    <TableRow
      sx={{
        "&:last-child td, &:last-child th": { border: 0 },
      }}
    >
      <TableCell style={tableCellStyles} component="th" scope="row">
        {schedule.scheduleName}
      </TableCell>
      <TableCell style={tableCellStyles} align="right">
        {schedule.scheduleDay}
      </TableCell>
      <TableCell style={tableCellStyles} align="right">
        {schedule.scheduleTime}
      </TableCell>
      {role === ADMIN && (
        <TableCell style={tableCellStyles} align="right">
          <Button type="button" size="small">
            <HiTrash onClick={() => deleteClicked(schedule.id)} />
          </Button>
        </TableCell>
      )}
    </TableRow>
  );
};

export default ScheduleItem;
