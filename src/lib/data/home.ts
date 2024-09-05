import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Anish';

export const lastName = 'Philip';

export const description =
	'A seasoned full-stack engineer adept at developing cloud-native applications and digitizing workflows. Leveraging expertise in Python, Go, JavaScript, and cutting-edge technologies like machine learning and data science to deliver innovative and seamless user experiences.';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/anishphilip012git' },
	{platform: Platform.Linkedin, link: 'https://www.linkedin.com/in/anishphilip12/'},
	{	platform: Platform.Email,	link: 'philipanish011@gmail.com'},
	{	platform: Platform.Facebook,link: 'https://www.facebook.com/anish.philip.923/'	},
	{platform:Platform.BIO,link:'https://bio.link/anishphi'}
	
	
];

export const skills = getSkills('js', 'ts',  'java','go','angular','ansible','aws','gcp','reactjs', 'sass', 'svelte', 'css','html',);
// {
	// 	platform: Platform.Twitter,
	// 	link: 'https://x.com/AnishPhilip16'
	// },
	// {
	// 	platform: Platform.StackOverflow,
	// 	link: 'https://stackoverflow.com/'
	// },
	
	// {
	// 	platform: Platform.Youtube,
	// 	link: 'https://www.youtube.com'
	// },