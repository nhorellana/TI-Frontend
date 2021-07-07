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

const rows = [
  { sku: "10001", totalUnidades: 66 },
  { sku: "10002", totalUnidades: 112 },
  { sku: "10005", totalUnidades: 70 },
];

const nombre_vacunas = {
  10001: "BNT162B2",
  10002: "CORONAVAC",
  10005: "mRNA-1273",
};

const Vacunass = () => (
  <Card mb={6}>
    <CardHeader
      action={
        <IconButton aria-label="settings">
          <MoreVertical />
        </IconButton>
      }
      title="Vacunas producidas"
    />
    <Paper>
      <TableWrapper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre de vacuna</TableCell>
              <TableCell>SKU</TableCell>
              <TableCell>Cantidad producida</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow>
                <TableCell component="th" scope="row">
                  {nombre_vacunas[row.sku]}
                </TableCell>
                <TableCell>{row.sku}</TableCell>
                <TableCell>{row.totalUnidades}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableWrapper>
    </Paper>
  </Card>
);

export default Vacunass;
