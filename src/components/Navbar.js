import React from 'react';
import { Link } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import MenuIcon from '@material-ui/icons/Menu'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

import Header from './Header'

const useStyles = makeStyles(theme => ({
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}))

const Navbar = () => {
	const [anchorEl, setAnchorEl] = React.useState(null)

	const classes = useStyles()

	const handleMenuOpen = evt => {
		setAnchorEl(evt.currentTarget)
	}

	const handleMenuClose = () => {
		setAnchorEl(null)
	}
	return (
		<AppBar positin='static'>
			<Toolbar>
				<IconButton aria-controls='navigation-menu' aria-haspopup='true' onClick={handleMenuOpen} edge="start" color='inherit' aria-label='menu' className={classes.menuButton}>
					<MenuIcon />
				</IconButton>
				<Menu
					id='navigation-menu'
					anchorEl={anchorEl}
					keepMounted
					open={Boolean(anchorEl)}
					onClose={handleMenuClose}
				>
					<Link to='/home'><MenuItem onClick={handleMenuClose}>Home</MenuItem></Link>
					<Link to='/about'><MenuItem onClick={handleMenuClose}>About</MenuItem></Link>
					<Link to='/contacts'><MenuItem onClick={handleMenuClose}>Contacts</MenuItem></Link>
					<Link to='/projects'><MenuItem onClick={handleMenuClose}>Projects</MenuItem></Link>
				</Menu>
				<Typography variant='h1' className={classes.title}>
					<Header />
				</Typography>

			</Toolbar>
		</AppBar>
	)
}
export default Navbar