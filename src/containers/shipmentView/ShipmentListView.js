import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Redirect, Link } from "react-router-dom";
import ShipmentList from "../../components/shipment/ShipmentList";
import {
  getShipments,
  addShipment,
  deleteShipment,
  deletePackage
} from "../../store/actions/shipmentActions";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#72bda2" },
    secondary: { main: "#72bda2" }
  }
});

const styles = {
  mainContainer: {
    marginTop: 45,
    marginBottom: 60
  },
  heading: {
    marginBottom: 40
  }
};

class ShipmentListView extends Component {
  state = {
    previousPage: null,
    previousRowsPerPage: null,
    previousFilter: null
  };

  componentDidUpdate = (prevProps) => {
		if ((this.props.addedsuccess) && (prevProps.addedsuccess !== this.props.addedsuccess)) {
      console.log("BING BING BING")
	this.setState({previousPage: 1, previousRowsPerPage: 10, previousFilter: false }, () => this.props.getShipments())
	}}

  componentDidMount() {
    this.props.getShipments();
  }

  addShipment = (trackingNumber, uuid) => {
    this.props.addShipment(trackingNumber, uuid);
  };

  deleteShipment = (uuid, currentPage, currentRowsPerPage, currentFilter) => {
    if (currentFilter === false) {
      this.setState(
        { previousPage: currentPage, previousRowsPerPage: currentRowsPerPage, previousFilter: currentFilter },
        () => this.props.deleteShipment(uuid.join())
      );
    } else {
      this.setState(
        { previousPage: currentPage, previousRowsPerPage: currentRowsPerPage, previousFilter: currentFilter },
        () => this.props.deletePackage(uuid.join())
      )
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.mainContainer}>
        <Typography
          className={classes.heading}
          gutterBottom
          variant="h5"
          component="h2"
        >
          Shipments
        </Typography>
        {this.props.shipments.length > 0 ? (
          <MuiThemeProvider theme={theme}>
            <ShipmentList
              previousPage={this.state.previousPage}
              previousRowsPerPage={this.state.previousRowsPerPage}
              addShipment={this.addShipment}
              deleteShipment={this.deleteShipment}
              shipments={this.props.shipments}
              previousFilter={this.state.previousFilter}
              addingShipment={this.props.adding}
              failureAdding={this.props.failure}
              errorMessage={this.props.error}
              
            />
          </MuiThemeProvider>
        ) : (
            <ShipmentList
              previousPage={this.state.previousPage}
              previousRowsPerPage={this.state.previousRowsPerPage}
              filter={this.state.filter}
              addShipment={this.addShipment}
              deleteShipment={this.deleteShipment}
              shipments={this.props.shipments}
              addingShipment={this.props.adding}
              failureAdding={this.props.failure}
              errorMessage={this.props.error}
            />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    shipments: state.shipmentsReducer.shipments,
    adding: state.shipmentsReducer.adding,
    failure: state.shipmentsReducer.failure,
    error: state.shipmentsReducer.error,
    addedsuccess: state.shipmentsReducer.addedsuccess
  };
};

export default connect(
  mapStateToProps,
  { getShipments, addShipment, deleteShipment, deletePackage }
)(withStyles(styles)(ShipmentListView));
