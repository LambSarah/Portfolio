import React from 'react'

const Header = () => {
	const styles = {
		fontFamily: 'Megrim',
		textAlign: 'center',
		fontSize: '100px',
		backgroundColor: 'darkblue',
		color: 'white'
	}
	return (
		<div className='header-wrapper'>
			<h1 style={styles}>Sarah Guidry</h1>

		</div>
	)
}

export default Header