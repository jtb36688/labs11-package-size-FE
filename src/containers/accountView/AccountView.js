import React, { Component } from 'react';
import Account from '../../components/account/Account';
import { connect } from 'react-redux';

import { getAuth, getAccountInfo } from '../../store/actions/userActions';

class AccountView extends Component {
	componentDidMount() {
		this.props.getAuth();
		this.props.getAccountInfo();
	}
	render() {
		return (
			<div>
				<Account user={this.props.userInfo} />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		isLoggedIn: state.userReducer.isLoggedIn,
		userInfo: state.userReducer.userInfo,
	};
};

export default connect(
	mapStateToProps,
	{ getAuth, getAccountInfo },
)(AccountView);
