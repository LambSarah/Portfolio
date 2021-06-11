import React from 'react'

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Markdown from './Markdown';

import Navbar from './Navbar'



const useStyles = makeStyles((theme) => ({
	markdown: {
		...theme.typography.body2,
		padding: theme.spacing(3, 0),
	},
}));

const Home = props => {
	const classes = useStyles();
	const { posts, title } = props;
	return (
		<>
			<Navbar />
			<Grid item xs={12} md={8}>
				<Typography variant="h6" gutterBottom>
					{title}
				</Typography>
				<Divider />
				{posts.map((post) => (
					<Markdown className={classes.markdown} key={post.substring(0, 40)}>
						{post}
					</Markdown>
				))}
			</Grid>
);
			<div>
				<h2>Introducing My Site</h2>
				<p>Hi! My name is Sarah Guidry. I'm a full stack web developer. Check out some of my work.</p>

				<section>
					<img id='mainProject' src='https://picsum.photos/1200/800' alt='ProjectScreenshot' />
				</section>
				<section id='sideProjects' class='flex-container'>

					<img id='sideProj2' src="https://picsum.photos/350/800?random=2" alt="Side Project 2" />
					<img id='sideProj3' src="https://picsum.photos/350/800?random=3" alt="Side Project 3" />
					<img id='sideProj4' src="https://picsum.photos/350/800?random=4" alt="Side Project 4" />
					<div class='flex-box'>
						<button id='myProjectsButton'><a href='projects.html'>My Projects</a></button>
						<p id='sideProjDescription'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue, sem ac egestas bibendum, ante sapien fringilla mi, sit amet faucibus lorem ipsum nec risus. Aliquam et tincidunt nisi. Nam.
            </p>
					</div>
				</section>
				<footer>
					<button id='contactButton'><a href='contact.html'>Contact Me</a></button>
					<div id='socialMediaButtons' class='flex-container'>
						<a id='first' href='https://www.facebook.com/guidrysa/'><i class='fab fa-facebook'></i></a>
						<a href='https://www.linkedin.com/in/sarah-guidry/'><i class='fab fa-linkedin-in'></i></a>
						<a href='https://github.com/LambSarah'><i class='fab fa-github'></i></a>
						<a href="https://www.instagram.com/boredeyeball/"><i class="fab fa-instagram"></i></a>
					</div>
				</footer>

			</div>
		</>)
}

export default Home

Home.propTypes = {
	posts: PropTypes.array,
	title: PropTypes.string,
};