import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import ProductListView from '../components/product/ProductList';
import ProductInputView from '../containers/productView/productInputView';
import LoginView from '../containers/loginView/LoginView';
import ShipmentInputView from '../containers/shipmentView/ShipmentInputView';
import ShipmentListView from '../containers/shipmentView/ShipmentListView';
import DashboardView from '../containers/dashboardView/DashboardView';
import RegisterView from '../containers/registerView/RegisterView';
import AccountView from '../containers/accountView/AccountView';
import LogoutView from '../containers/logoutView/LogoutView';
import { connect } from 'react-redux';

class Routes extends Component {
	render() {
		let routes;

		if (this.props.isLoggedIn) {
			routes = (
				<Switch>
					<Redirect from="/login" to="/" />
					<Redirect from="/register" to="/" />
					<Route exact path="/logout" component={LogoutView} />
					<Route exact path="/shipments/form" component={ShipmentInputView} />
					<Route exact path="/products/form" component={ProductInputView} />
					<Route exact path="/shipments" component={ShipmentListView} />
					<Route exact path="/products" component={ProductListView} />
					<Route exact path="/account" component={AccountView} />
					<Route exact path="/" component={DashboardView} />
				</Switch>
			);
		} else {
			routes = (
				<Switch>
					<Redirect exact from="/" to="/login" />

					<Route exact path="/login" component={LoginView} />
					<Route exact path="/register" component={RegisterView} />
					<Redirect to="/login" />
				</Switch>
			);
		}

		return <div>{routes}</div>;
	}
}
const mapStateToProps = state => {
	return {
		isLoggedIn: state.userReducer.isLoggedIn,
	};
};

export default connect(
	mapStateToProps,
	{},
)(Routes);
