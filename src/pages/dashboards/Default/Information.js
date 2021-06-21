import React, { useState, useEffect } from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";

import Helmet from "react-helmet";

import {
  Avatar,
  Breadcrumbs as MuiBreadcrumbs,
  Button,
  Card as MuiCard,
  CardActions,
  CardContent as MuiCardContent,
  CardMedia as MuiCardMedia,
  Chip as MuiChip,
  Grid,
  Link,
  Typography as MuiTypography,
} from "@material-ui/core";

import { AvatarGroup as MuiAvatarGroup } from "@material-ui/lab";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import { red, green, orange } from "@material-ui/core/colors";

import { spacing } from "@material-ui/system";
import { RedoOutlined } from "@material-ui/icons";
import { set } from "date-fns";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

const Card = styled(MuiCard)(spacing);

const CardContent = styled(MuiCardContent)`
  border-bottom: 1px solid ${(props) => props.theme.palette.grey[300]};
`;

const Typography = styled(MuiTypography)(spacing);

function Bodega({ title, description, almacen }) {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card mb={12}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography mb={4} component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={handleClickOpen}>
          Más Información
        </Button>
      </CardActions>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="xl"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Acá aparecé el listado de SKU's con la cantidad respectiva
          </DialogContentText>
          <List className={classes.root}>
            {almacen && almacen.length > 0 ? (
              almacen.map((item, index) => (
                <ListItem>
                  <ListItemText primary={"SKU: " + item._id} align="left" />
                  <ListItemText primary={item.total} align="right" />
                </ListItem>
              ))
            ) : (
              <ListItem>
                <ListItemText
                  primary="No hay elementos en el almacen"
                  align="center"
                />
              </ListItem>
            )}
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Salir
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}

function Bodegas(props) {
  const bodega_data = props.bodega_data;

  return (
    <React.Fragment>
      <Grid container spacing={6}>
        {Object.keys(bodega_data).map(function (key) {
          return (
            <Grid item xs={12} lg={6} xl={3}>
              <Bodega title={key} description="" almacen={bodega_data[key]} />
            </Grid>
          );
        })}
      </Grid>
    </React.Fragment>
  );
}

export default Bodegas;
