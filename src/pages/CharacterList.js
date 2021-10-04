import React from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from "@material-ui/core";

const CharacterList = () => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>S/N</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Gender</TableCell>
          <TableCell>Height</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default CharacterList;
