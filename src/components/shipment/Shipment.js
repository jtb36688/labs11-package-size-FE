import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Icon from "@material-ui/core/Icon";
import classNames from "classnames";
import Checkbox from "@material-ui/core/Checkbox";
import ViewShipmentModal from "../modals/ViewShipmentModal";
import moment from "moment-timezone";
import { Button } from "@material-ui/core";
import { white } from "ansi-colors";
import Typography from "@material-ui/core/Typography";

const timezone = moment.tz.guess()

const styles = theme => ({
  TimeRow: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  StatusRow: {
    width: "100px",
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  button: {
    backgroundColor: "#72bda2",
    color: "white",
    fontSize: "10px"
  },
  WeightRow: {
    [theme.breakpoints.down("md")]: {
      display: "none"
    }
  },
  DimensionsRow: {
    [theme.breakpoints.down("md")]: {
      display: "none"
    }
  },
  NamesRow: {
    [theme.breakpoints.down("md")]: {
     fontSize: "10px"
    }
  }
});

function Shipment(props) {
  const { classes } = props;
  return (
    <TableRow id={"tablerow-1"} style={{ cursor: "pointer" }} hover aria-checked="false" role="checkbox" tabIndex={-1} onClick={() => props.openModal(props.shipment)}>
      <TableCell className={classes.TimeRow} align="right">
        {moment.tz(props.shipment.lastUpdated, "Pacific/Fiji").clone().tz(timezone).format("L h:mm a")}
      </TableCell>
      {props.shipment.tracked ? (
        <TableCell
          style={statusStyling(props.shipment)}
          className={classes.StatusRow}
          align="right"
        >
          {parsedStatus(props.shipment)}
        </TableCell>
      ) : (
        <TableCell className={classes.StatusRow} align="right">
          <Typography
            style={{ fontSize: "11px", color: "grey", whiteSpace: "nowrap" }}
          >
            Add Tracking..
          </Typography>
        </TableCell>
      )}
      <TableCell className={classes.WeightRow} align="right">{props.shipment.totalWeight}</TableCell>
      <TableCell className={classes.DimensionsRow} align="right">{props.shipment.dimensions}</TableCell>
      <TableCell className={classes.NamesRow} align="right">
        {props.shipment.productNames.join(", ")}
      </TableCell>
      <TableCell padding="checkbox" align="right">
        <Checkbox
          checked={props.isSelected}
          onClick={event => props.handleClick(event, props.shipment.uuid)}
        />
      </TableCell>
    </TableRow>
  );
}

Shipment.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Shipment);

const parsedStatus = n => {
  if (n.status === 0) {
    return "Unknown";
  }
  if (n.status === 1) {
    return "Shipping";
  }
  if (n.status === 2) {
    return "En-Route";
  }
  if (n.status === 3) {
    return "Out-For-Delivery";
  }
  if (n.status === 4) {
    return "Delivered";
  }
  if (n.status === 5) {
    return "Delayed";
  }
};

const statusStyling = n => {
  if (n.status === 0) {
    return {
      borderBottom: "3px solid #ffa9a8"
    };
  }
  if (n.status === 1) {
    return {
      borderBottom: "3px solid #ffc642"
    };
  }
  if (n.status === 2) {
    return {
      borderBottom: "3px solid #ffc642"
    };
  }
  if (n.status === 3) {
    return {
      borderBottom: "3px solid #ffc642"
    };
  }
  if (n.status === 4) {
    return {
      borderBottom: "3px solid #a7c2a6"
    };
  }
  if (n.status === 5) {
    return {
      borderBottom: "3px solid #ffa9a8"
    };
  }
};
