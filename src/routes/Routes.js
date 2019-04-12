import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import ProductListView from '../containers/productView/ProductListView';
import PackagingView from '../containers/packagingView/PackagingView';
import ProductAddView from '../containers/productView/productAddView';
import LoginView from '../containers/adminViews/loginView/LoginView';
import ShipmentAddView from '../containers/shipmentView/ShipmentAddView';
import ShipmentListView from '../containers/shipmentView/ShipmentListView';
import PackageTableView from '../containers/packageTableView/PackageTableView'
import AccountView from '../containers/accountView/AccountView';
import LogoutView from '../containers/adminViews/logoutView/LogoutView';
import Layout from '../hoc/layout/Layout';
import { connect } from 'react-redux';
import DashboardView from '../containers/dashboardView/DashboardView';
import { getAuth } from '../store/actions/userActions';
import SignupView from '../containers/adminViews/signupView/SignupView';

class Routes extends Component {
	componentWillMount() {
		this.props.getAuth();
	}
	render() {
		let routes;

		if (this.props.isLoggedIn) {
			routes = (
				<Switch>
					<Redirect from="/login" to="/" />
					<Redirect from="/signup" to="/" />
					<Route exact path="/logout" component={LogoutView} />
					<Route exact path="/shipment/add" component={ShipmentAddView} />
					<Route exact path="/product/add" component={ProductAddView} />
					<Route exact path="/shipments" component={ShipmentListView} />
					<Route exact path="/packaging" component={PackagingView} />
					<Route exact path="/packages" component={PackageTableView} />
					<Route exact path="/products" component={ProductListView} />
					<Route exact path="/account" component={AccountView} />
					<Route exact path="/" component={DashboardView} />
				</Switch>
			);
		} else {
			routes = (
				<Switch>
					<Redirect exact from="/" to="/login" />
					<Route exact path="/signup" component={SignupView} />
					<Route exact path="/login" component={LoginView} />
					<Redirect to="/login" />
				</Switch>
			);
		}

		return <Layout>{routes}</Layout>;
	}
}
const mapStateToProps = state => {
	return {
		isLoggedIn: state.userReducer.isLoggedIn,
	};
};

export default connect(
	mapStateToProps,
	{ getAuth },
)(Routes);
