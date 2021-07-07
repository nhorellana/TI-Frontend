import React from "react";
import styled from "styled-components/macro";

import {
  Card as MuiCard,
  CardHeader,
  IconButton,
  Chip as MuiChip,
  Paper as MuiPaper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";

import { green, orange } from "@material-ui/core/colors";

import { spacing } from "@material-ui/system";

import { MoreVertical } from "react-feather";

const Card = styled(MuiCard)(spacing);

const Chip = styled(MuiChip)`
  height: 20px;
  padding: 4px 0;
  font-size: 90%;
  background-color: ${(props) => props.rgbcolor};
  color: ${(props) => props.theme.palette.common.white};
`;

const Paper = styled(MuiPaper)(spacing);

const TableWrapper = styled.div`
  overflow-y: auto;
  max-width: calc(100vw - ${(props) => props.theme.spacing(12)}px);
`;

// Data

const rows = {
  "60caa3af31df040004e88dfa": { 107: 24, 113: 72, 121: 16 },
  "60caa3af31df040004e88df7": { 108: 30, 121: 8, 126: 10 },
  "60caa3af31df040004e88dfb": { 121: 30, 107: 15, 108: 30, 113: 25 },
  "60caa3af31df040004e88def": { 108: 18 },
  "60caa3af31df040004e88dee": { 121: 24, 126: 12, 108: 12 },
  "60caa3af31df040004e88de4": { 108: 6, 126: 4 },
  "60caa3af31df040004e88dec": { 107: 49, 113: 36, 126: 80, 108: 36 },
  "60caa3af31df040004e88df9": { 107: 24, 108: 18, 126: 12, 113: 22 },
  "60caa3af31df040004e88de9": { 113: 6 },
  "60caa3af31df040004e88df1": { 108: 36 },
  "60caa3af31df040004e88df3": { 108: 42, 107: 12, 113: 28 },
  "60caa3af31df040004e88deb": { 107: 16 },
  "60caa3af31df040004e88de5": { 108: 8 },
  "60caa3af31df040004e88df2": { 108: 6 },
};

const Envios = (data) => (
  <Card mb={6}>
    <CardHeader
      action={
        <IconButton aria-label="settings">
          <MoreVertical />
        </IconButton>
      }
      title="Envíos Realizados"
    />
    <Paper>
      <TableWrapper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID Grupo</TableCell>
              <TableCell>SKU</TableCell>
              <TableCell>Cantidad</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {console.log("DATA: " + JSON.stringify(data.data))}
            {Object.keys(data.data).map((row) =>
              Object.keys(data.data[row]).map((detail) => (
                <TableRow>
                  <TableCell component="th" scope="row">
                    {row}
                  </TableCell>
                  <TableCell>{detail}</TableCell>
                  <TableCell>{data.data[row][detail]}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableWrapper>
    </Paper>
  </Card>
);

export default Envios;
