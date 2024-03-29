import React from "react";
import { AccountCircle, Lock, LockOpen } from "@material-ui/icons";
import { CircleMenu, CircleMenuItem } from "react-circular-menu";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

import { Home, ContactMail, ListAlt, Info } from "@material-ui/icons";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../store/actions/auth";

const NavRight = ({ auth: { isAuthenticated, loading }, logout }) => {
	const authLinks = (
		<CircleMenuItem
			tooltip='Logout'
			className='menu-item'
			tooltipPlacement='bottom'
			onClick={logout}
		>
			<Button>
				<Link exact to='/'>
					<Lock color='secondary' fontSize='large' />
				</Link>
			</Button>
		</CircleMenuItem>
	);
	const guestLinks = (
		<CircleMenuItem tooltip='Login' className='menu-item' tooltipPlacement='left'>
			<Button>
				<Link exact to='/login'>
					<LockOpen color='secondary' fontSize='large' />
				</Link>
			</Button>
		</CircleMenuItem>
	);
	return (
		<div className='circular-nav-right'>
			<CircleMenu
				startAngle={120}
				rotationAngle={130}
				itemSize={3}
				radius={5}
				menuToggleClassName='toggle-menu'
				rotationAngleInclusive={false}
			>
				<CircleMenuItem
					onClick={() => {}}
					tooltip='Home'
					tooltipPlacement='right'
					className='menu-item'
				>
					<Button>
						<Link exact to='/land'>
							<Home color='primary' fontSize='large' />
						</Link>
					</Button>
				</CircleMenuItem>
				<CircleMenuItem
					tooltip='Listing'
					className='menu-item'
					tooltipPlacement='right'
				>
					<Button>
						<Link exact to='/listing'>
							<ListAlt color='primary' fontSize='large' />
						</Link>
					</Button>
				</CircleMenuItem>
				<CircleMenuItem
					tooltip='Add Property'
					className='menu-item'
					tooltipPlacement='right-end'
				>
					<Button>
						<Link exact to='/contact'>
							<Info color='primary' fontSize='large' />
						</Link>
					</Button>
				</CircleMenuItem>
				
				{/* <CircleMenuItem
					tooltip='Profile'
					tooltipPlacement='left'
					className='menu-item'
				>
					<Button>
						<Link exact to='/profile'>
							<AccountCircle color='secondary' fontSize='large' />
						</Link>
					</Button>
				</CircleMenuItem> */}
			</CircleMenu>
		</div>
	);
};

NavRight.propTypes = {
	logout: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { logout })(NavRight);
