import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

import LoginView from '../../containers/loginView/LoginView';
// import Avatar from '@material-ui/core/Avatar';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import FormControl from '@material-ui/core/FormControl';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import { Link } from 'react-router-dom';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
	main: {
		width: 'auto',
		display: 'block', // Fix IE 11 issue.
		marginLeft: theme.spacing.unit * 3,
		marginRight: theme.spacing.unit * 3,
		[theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
			width: 400,
			marginLeft: 'auto',
			marginRight: 'auto',
		},
	},
	paper: {
		marginTop: theme.spacing.unit * 8,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
			.spacing.unit * 3}px`,
	},
	avatar: {
		margin: theme.spacing.unit,
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing.unit,
	},
	submit: {
		marginTop: theme.spacing.unit * 3,
	},
});

const Login = props => {
	const { classes } = props;

	return (
		<div>
			<Button
				onClick={props.loginSubmit}
				type="submit"
				fullWidth
				variant="contained"
				color="primary"
				className={classes.submit}>
				Sign in
			</Button>
		</div>
	);
};

Login.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);

// <main className={classes.main}>
// 	<CssBaseline />
// 	<Paper className={classes.paper}>
// 		<Avatar className={classes.avatar}>
// 			<LockOutlinedIcon />
// 		</Avatar>
// 		<Typography component="h1" variant="h5">
// 			Sign in
// 		</Typography>
// 		<form onSubmit={props.loginSubmit} className={classes.form}>
// 			<FormControl margin="normal" required fullWidth>
// 				<InputLabel htmlFor="username">Username</InputLabel>
// 				<Input
// 					id="username"
// 					value={props.username}
// 					onChange={props.handleChange}
// 					name="username"
// 					autoComplete="username"
// 					autoFocus
// 				/>
// 			</FormControl>
// 			<FormControl margin="normal" required fullWidth>
// 				<InputLabel htmlFor="password">Password</InputLabel>
// 				<Input
// 					onChange={props.handleChange}
// 					value={props.password}
// 					name="password"
// 					type="password"
// 					id="password"
// 					autoComplete="current-password"
// 				/>
// 			</FormControl>
// 			<FormControlLabel
// 				control={<Checkbox value="remember" color="primary" />}
// 				label="Remember me"
// 			/>
// 			<Button
// 				type="submit"
// 				fullWidth
// 				variant="contained"
// 				color="primary"
// 				className={classes.submit}>
// 				Sign in
// 			</Button>
// 			<Link to="/register">Register</Link>
// 		</form>
// 	</Paper>
// </main>
