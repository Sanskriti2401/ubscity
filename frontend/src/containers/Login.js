import React, { useState } from "react";

import { Link, Redirect } from "react-router-dom";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { login } from "../store/actions/auth";
import { useHistory } from 'react-router-dom';


const Login = ({ login, isAuthenticated }) => {

	const history = useHistory();
	const handleExplore = () => {
		history.push('/land');
		
	  };
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const { email, password } = formData;

	const onChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const onSubmit = (e) => {
		e.preventDefault();
		login(email, password);
	};

	if (isAuthenticated) return <Redirect to='/' />;
	
	

	return (
		<>
			<div className='container'>
				<Helmet>
					<title>UBSCity - Login</title>
					<meta name='description' content='login page' />
				</Helmet>
				<form onSubmit={(e) => onSubmit(e)}>
					<div className='form-group px-3'>
						<input
							type='email'
							className='form-control my-4 py-4'
							placeholder='Email Address'
							name='email'
							value={email}
							onChange={(e) => onChange(e)}
							required
						/>
						<input
							type='password'
							className='form-control my-4 py-4'
							placeholder='Password'
							name='password'
							value={password}
							minLength='6'
							onChange={(e) => onChange(e)}
							required
						/>
						<button
							type='submit'
							className='btn btn-primary my-2 py-2 px-5 font-weight-bolder' onClick={handleExplore}
							style={{background:'red', border: 'none'} }
						>
							SIGN IN
						</button>
					</div>


					<div className='my-3'>
							<h5>
								Don't have an account? Sign Up
							</h5>
						</div>
				</form>
			</div>
		</>
	);
};

Login.propTypes = {
	login: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
