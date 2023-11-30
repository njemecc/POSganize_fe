//components
import { TableRow, TableCell } from "@mui/material";
import Tag from "../../ui/Tag";

//hooks
import { useState } from "react";

const MembershipRow = ({ membership }) => {
  const trainings = membership?.trainings?.map(
    (training) => `${training.name} `
  );

  return (
    <TableRow
      key={membership.id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell sx={{ fontSize: 13.5 }} component="th" scope="row">
        {...trainings}
      </TableCell>
      <TableCell sx={{ fontSize: 13.5 }} align="left">
        {membership.startDate}
      </TableCell>
      <TableCell sx={{ fontSize: 13.5 }} align="left">
        {membership.expireDate}
      </TableCell>
      <TableCell sx={{ fontSize: 13.5 }} align="left">
        {membership.price}
      </TableCell>
      <TableCell sx={{ fontSize: 13.5 }} align="left">
        {" "}
        {membership.active === null ? (
          <Tag type="yellow">not a member</Tag>
        ) : membership.active ? (
          <Tag type="green">active</Tag>
        ) : (
          <Tag type="red">not active</Tag>
        )}
      </TableCell>
    </TableRow>
  );
};

export default MembershipRow;
