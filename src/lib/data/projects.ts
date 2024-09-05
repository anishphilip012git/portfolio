import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';
import { getProjectDescription } from './projectDescription';

export const items: Array<Project> = [
	{
		slug: 'stony-brook-university-seclab-websheets',
		color: '#9370DB', // Purple
		description: getProjectDescription('websheets'),
		shortDescription: 'A no-code framework for manipulating tabular data, featuring a custom query language based on Forensic Query Language by Prof. R. Sekar. It offers a seamless and secure way to manage data, utilizing a novel architecture inspired by the granularity and flexibility of Linux file systems to ensure data segregation and privacy.',
		links: [],
		logo: Assets.SBU,
		name: 'Websheets - SECLAB',
		period: {
		  from: new Date('2024-01-01')	},
		skills: getSkills('c++', 'reactjs', 'js', 'ant design', 'microservices', 'docker', 'vagrant','vm','privacy-policies'),
		type: 'Web Application'
	  },
	  {
		slug: 'stony-brook-university-workflow-digitization',
		color: '#9370DB', // Purple
		description: getProjectDescription('csworkflow'),
		shortDescription: 'Digitized workflows, enhanced user experiences, and integrated with third-party APIs at Stony Brook University.',
		links: [],
		logo: Assets.SBU,
		name: 'CS Workflow Digitization - COMPAS lab',
		period: {
		  from: new Date('2024-01-01')	},
		skills: getSkills('python', 'reactjs', 'js', 'gcp','nodejs','firebase', 'microservices', 'docker', 'adobe-pdf-apis', 'google-apis'),
		type: 'Web Application'
	  },
	  {
		"slug": "stony-brook-university-ml-ds-urban-transportation",
		"color": "#4682B4", // Steel Blue
		"description": getProjectDescription("ds_prob_stats"),
		"shortDescription": "Comprehensive Data Analysis and Predictive Modeling for Urban Transportation",
		"links": [],
		"logo": Assets.SBU, // Placeholder for project-specific logo
		"name": "Urban Transportation Data Analysis",
		"period": {
			"from": new Date("2024-02-01"),
			"to": new Date("2024-05-31")
		},
		"skills": getSkills('python'),
		"type": "Data Science Project"
	},	
	  {
		slug: 'stony-brook-university-ml-dsf-eval',
		color: '#9370DB', // Purple
		description: getProjectDescription('ml_dsf_eval'),
		shortDescription: 'Elevating Local Economies: A Novel Approach to Quantifying Small Business Significance',
		links: [],
		logo: Assets.SBU,
		name: 'Quantifying Significance of Small Businesses',
		period: {
		  from: new Date('2023-10-01'),to:new Date('2023-12-10')	},
		skills: getSkills('python'),
		type: 'Web Application'
	  },
	  {
		slug: 'stony-brook-university-ml-rl-fts',
		color: '#9370DB', // Purple
		description: getProjectDescription('ml_rl_fts'),
		shortDescription: 'Construction/implementation and evaluation of Financial Trading Systems (FTS) using a variety of Reinforcement Learning algorithms',
		links: [],
		logo: Assets.SBU,
		name: 'Stock Trading with Reinforcement Learning Insights',
		period: {
		  from: new Date('2023-10-01'),to:new Date('2023-12-10')	},
		skills: getSkills('python'),
		type: 'Web Application'
	  },
	  {
		slug: 'samsung-iam-system',
		color: '#0071C5', // Blue
		description: getProjectDescription('samsung_iam'),
		shortDescription: 'Samsung\'s global Identity and Access Management (IAM) system',
		links: [],
		logo: Assets.SAMSUNG,
		name: 'Samsung IAM System',
		period: {
		  from: new Date('2019-01-01'),
		  to: new Date('2023-08-31')
		},
		skills: getSkills('go','ansible','angular','python','mysql','sqlserver','postgresql','aws','azure','gcp', 'serverless', 'microservices', 'security', 'iam','zero-trust'),
		type: 'Identity and Access Management System'
	  },
	  {
		slug: 'samsung-soh-system',
		color: '#0071C5', // Blue
		description: getProjectDescription('samsung_soh'),
		shortDescription: 'Samsung\'s cloud security operations hub.',
		links: [],
		logo: Assets.SAMSUNG,
		name: 'Samsung Security & Operations HUB',
		period: {
		  from: new Date('2022-03-01'),
		  to: new Date('2023-08-31')
		},
		skills: getSkills('python', 'fastapi', 'sqlalchemy','reactjs','nextjs', 'cloud','aws','azure','gcp','serverless', 'microservices', 'security','openvas'),
		type: 'Samsung Security & Operations HUB'
	  },
	  {
		slug: 'samsung-customer-support-system',
		color: '#FF0000', // Red
		description: getProjectDescription("samsung_erms"),
		shortDescription: 'Email tracking and productivity management system for Samsung customer care.',
		links: [],
		logo: Assets.SAMSUNG,
		name: 'Samsung Email Response Management System',
		period: {
		  from: new Date('2017-07-01'),
		  to: new Date('2019-12-31')
		},
		skills: getSkills('java','spring','vuejs','mysql','js','go','email-tracking', 'productivity-management', 'automation', 'notification', 'issue-tracking'),
		type: 'Customer Support System'
	  },
	  {
		slug: 'oxane-partners-projects',
		color: '#800080', // Purple
		description: 'Led full-stack development of an online assessment platform with MVC architecture in JAVA Spring Hibernate and AngularJS, reducing code redundancy by 60% and enhancing module performance. Streamlined XML and JSON data pipelines through automation, reducing data processing times by 50% and enhancing interoperability. Contributed to optimizing an existing financial portfolio management system, applying data structure improvements to reduce response times by 40%.',
		shortDescription: 'Developed an online assessment platform and optimized a financial portfolio management system.',
		links: [
		  { to: 'https://oxanepartners.com/', label: 'Website' }
		],
		logo: Assets.OXANE,
		name: 'Oxane Partners Projects',
		period: {
		  from: new Date('2016-06-01'),  to: new Date('2016-07-31')
		},
		skills: getSkills('java', 'spring', 'hibernate', 'angularjs', 'xml', 'json'),
		type: 'Web Application and Automation Tools'
	  },
	  {
		slug: 'dtu-techfest-websites',
		color: '#FFA500', // Orange
		description: 'Worked on responsive, mobile-first front-end web development in Bootstrap for annual techfests at Delhi Technological University, including Phoenix and Cogenesis. Developed websites in PHP for online quizzing competitions like Cryptex.',
		shortDescription: 'Developed web applications for various university events and competitions.',
		links: [],
		logo: Assets.DTU,
		name: 'DTU Techfest Websites',
		period: {
		  from: new Date('2014-08-01'),  to: new Date('2017-06-30')
		},
		skills: getSkills('bootstrap', 'responsive-design', 'mobile-first', 'php', 'web-development'),
		type: 'Website'
	  },
	  {
		slug: 'android-app-development',
		color: '#008000', // Green
		description: 'Designed and developed Android applications at Appsolute Pvt. Ltd. during studies at Delhi Technological University.',
		shortDescription: 'Developed Android applications.',
		links: [],
		logo: Assets.APPSOLUTE,
		name: 'Android App Development',
		period: {
		  from: new Date('2015-01-01'),
		  to: new Date('2015-03-31')
		},
		skills: getSkills('android', 'app-development'),
		type: 'Mobile Application'
	  },
	 
	// {
	// 	slug: 'slick-portfolio-angular',
	// 	color: '#5e95e3',
	// 	description:
	// 		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
	// 	shortDescription:
	// 		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
	// 	links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
	// 	logo: Assets.Unknown,
	// 	name: 'Slick Portfolio',
	// 	period: {
	// 		from: new Date()
	// 	},
	// 	skills: getSkills('angular', 'ts', 'tailwind'),
	// 	type: 'Website Template'
	// },
	// {
	// 	slug: 'slick-portfolio-svelte',
	// 	color: '#ff3e00',
	// 	description:
	// 		'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
	// 	shortDescription:
	// 		'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
	// 	links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
	// 	logo: Assets.Svelte,
	// 	name: 'Slick Portfolio',
	// 	period: {
	// 		from: new Date()
	// 	},
	// 	skills: getSkills('svelte', 'ts', 'tailwind', 'sass'),
	// 	type: 'Website Template',
	// 	screenshots: [
	// 		{
	// 			label: 'screen 1',
	// 			src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
	// 		},
	// 		{
	// 			label: '2',
	// 			src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
	// 		},
	// 		{
	// 			label: '3',
	// 			src: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
	// 		},
	// 		{
	// 			label: '4',
	// 			src: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
	// 		},
	// 		{
	// 			label: '5',
	// 			src: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
	// 		},
	// 		{
	// 			label: '6',
	// 			src: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
	// 		}
	// 	]
	// }
];

export const title = 'Projects';
