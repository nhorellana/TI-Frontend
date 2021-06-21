import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import Bodegas from "./Information";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios";
import {
  Grid,
  Divider as MuiDivider,
  Typography as MuiTypography,
  Breadcrumbs as MuiBreadcrumbs,
  Link,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";

import { green, red } from "@material-ui/core/colors";

import SkuTable from "./Table";
import Request from "../../../services/requests";

const Divider = styled(MuiDivider)(spacing);
const Typography = styled(MuiTypography)(spacing);

const data_bodega = {
  recepcion: [],
  despacho: [
    {
      _id: "114",
      total: 10,
    },
    {
      _id: "107",
      total: 10,
    },
    {
      _id: "112",
      total: 20,
    },
    {
      _id: "129",
      total: 20,
    },
    {
      _id: "1000",
      total: 20,
    },
    {
      _id: "119",
      total: 10,
    },
    {
      _id: "118",
      total: 10,
    },
    {
      _id: "100",
      total: 30,
    },
    {
      _id: "108",
      total: 18,
    },
    {
      _id: "113",
      total: 10,
    },
  ],
  pulmon: [],
  general: [
    {
      _id: "114",
      total: 36,
    },
    {
      _id: "107",
      total: 44,
    },
    {
      _id: "30020",
      total: 3,
    },
    {
      _id: "30010",
      total: 10,
    },
    {
      _id: "112",
      total: 88,
    },
    {
      _id: "129",
      total: 104,
    },
    {
      _id: "1000",
      total: 44,
    },
    {
      _id: "119",
      total: 44,
    },
    {
      _id: "118",
      total: 28,
    },
    {
      _id: "100",
      total: 60,
    },
    {
      _id: "108",
      total: 70,
    },
    {
      _id: "113",
      total: 52,
    },
  ],
};

const data_stock = [
  {
    _id: "100",
    total: 2,
  },
  {
    _id: "101",
    total: 0,
  },
  {
    _id: "1000",
    total: 30,
  },
  {
    _id: "10001",
    total: 7,
  },
];

// function ManageData(apiResponse) {
//   var rotations = [];
//   var procedures = [];

//   Object.keys(apiResponse).forEach(function (key) {
//     if (key == "otherProcedures") {
//       if (apiResponse[key].length > 0) {
//         procedures.push(apiResponse[key]);
//       }
//     }
//   });
//   rotations = apiResponse.rotations;
//   Object.keys(rotations).forEach(function (key) {
//     const r_procedure = rotations[key].procedures;
//     r_procedure.forEach((element) => {
//       procedures.push(element);
//     });
//   });

//   return [rotations, procedures];
// }

function Dashboard() {
  const [apiResponse, setResponse] = useState({});
  const [isLoading, setLoading] = useState(false);

  // useEffect(() => {
  //   axios
  //     .get("http://aysen3.ing.puc.cl/api/status-info", {
  //       headers: { "Content-Type": "application/json" },
  //     })
  //     .then(
  //       ((response) => {
  //         console.log(response.data);
  //       }).catch((error) => {
  //         console.log(error);
  //       })
  //     );
  // Request.requestBodegaData()
  //   .then((response) => {
  //     setResponse(response);
  //     setLoading(false);
  //   })
  //   .catch((e) => {
  //     console.log("Error as: " + e);
  //   });
  // }, []);

  if (isLoading) {
    return (
      <Typography variant="h3" gutterBottom>
        Cargando...
      </Typography>
    );
  }

  // var cleanData = ManageData(apiResponse);
  // const rotations = cleanData[0];
  // const procedures = cleanData[1];

  return (
    <React.Fragment>
      <Helmet title="Dashboard Docente" />
      <Grid justify="space-between" container spacing={6}>
        <Grid item>
          <Typography variant="h3" gutterBottom>
            Dashboard
          </Typography>
        </Grid>
        <Divider my={6} />
      </Grid>

      <Divider my={6} />

      <Grid container spacing={6}>
        <Grid item>
          <Typography variant="h5" gutterBottom>
            Bodegas
          </Typography>
        </Grid>
        <Grid item xs={12} lg={12}>
          <Bodegas bodega_data={data_bodega} />
        </Grid>
      </Grid>
      <Grid container spacing={12}>
        <Grid item xs={12} lg={12}>
          <SkuTable rows={data_stock} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Dashboard;
