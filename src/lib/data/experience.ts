import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'sbu_websheets',
		company: 'Stony Brook University - SECLAB',
		description: 'Developed Websheets, a no-code web framework for managing tabular data with fine-grained privacy and access controls. Designed a custom query language inspired by Forensic Query Language (FQL) under the guidance of Prof. R. Sekar. Built a React-based frontend and C++ backend that emulates Linux-like file system structures for precise data access. Utilized Docker, Vagrant, and VM environments to simulate multi-user isolation and enforce role-based permissions. Enhanced data traceability, modular policy enforcement, and developer tooling within the Secure Systems Lab.',
		contract: ContractType.PartTime,
		type: 'Web Application',
		location: 'Stony Brook, New York, United States',
		period: {
			from: new Date('2024-05-01')
		},
		skills: getSkills('c++', 'reactjs', 'js', 'ant design', 'microservices', 'docker', 'vagrant', 'vm', 'privacy-policies'),
		name: 'Websheets - SECLAB',
		color: '#9370DB',
		links: [],
		logo: Assets.SBU,
		shortDescription: 'A no-code framework for secure tabular data manipulation with a Linux-inspired architecture and privacy-aware access control.'
	},

	{
		slug: 'sbu_compas',
		company: 'Stony Brook University',
		description: 'Digitized 80% of offline workflows within the Computer Science department, developing a web application for managing and tracking progress. Implemented online form filling and signing using Adobe PDF APIs, achieving a 60% reduction in processing time with a real-time progress tracker. Transformed a university website from non-mobile-friendly to mobile-friendly, resulting in a 30% increase in traffic and an enhanced user experience. Integrated with Google Calendar and Mail APIs for scheduling events and benefiting over 500 students and faculty members.',
		contract: ContractType.FullTime,
		type: 'Software Engineer Full Stack',
		location: 'Stony Brook, New York, United States',
		period: { from: new Date('2024-01-01'), to: new Date('2024-12-31') },
		skills: getSkills('python', 'go', 'javascript', 'gcp', 'firebase', 'microservices', 'docker', 'adobe-pdf-apis', 'google-apis'),
		name: 'Full Stack Engineer',
		color: 'purple',
		links: [],
		logo: Assets.SBU,
		shortDescription: 'Digitized workflows, enhanced user experiences, and integrated with third-party APIs.'
	},
	{
		slug: 'samsung_chief',
		company: 'Samsung R&D Institute India',
		description: "Led the development of Samsung's in-house Identity and Access Management (IAM) system, managing cloud security for around 5000 servers and 700 databases globally. Revamped the desktop application to a secure web application for multiple platforms. Developed a comprehensive Security Hub for Samsung services, adopted on a global scale. Implemented a microservices-based architecture using Python FastAPI on serverless infrastructure and SQL Alchemy for dashboard development.",
		contract: ContractType.FullTime,
		type: 'Chief Engineer',
		location: 'Noida, Uttar Pradesh, India',
		period: {
			from: new Date('2022-03-01'),
			to: new Date('2023-08-31')
		},
		skills: getSkills('python', 'fastapi', 'sqlalchemy', 'serverless', 'microservices', 'security', 'iam'),
		name: 'Chief Software Engineer',
		color: 'blue',
		links: [],
		logo: Assets.SAMSUNG,
		shortDescription: "Led the development of Samsung's global IAM system and Security Hub."
	},
	{
		slug: 'samsung_lead',
		company: 'Samsung R&D Institute India',
		description: 'Automated AWS server management using Ansible, achieving nearly 100% automation. Implemented secure RDS user management and a two-layer password rotation method for enhanced security. Developed a scalable and cost-effective solution for central RDS audit log collection and management, supporting multiple DBMS. Utilized Amazon Athena for faster log search queries on static logs in S3.',
		contract: ContractType.FullTime,
		type: 'Lead Software Engineer',
		location: 'Noida, Uttar Pradesh, India',
		period: {
			from: new Date('2020-01-01'),
			to: new Date('2022-03-31')
		},
		skills: getSkills('ansible', 'aws', 'rds', 'python', 'go', 'lambda', 'athena', 'cloudwatch', 'dynamodb', 'ecs', 'ecr', 'docker', 'jenkins', 'active-directory', 'ldap'),
		name: 'Lead Software Engineer',
		color: 'green',
		links: [],
		logo: Assets.SAMSUNG,
		shortDescription: 'Automated AWS server management and implemented secure RDS solutions.'
	},
	{
		slug: 'samsung_engineer',
		company: 'Samsung R&D Institute India',
		description: 'Developed a real-time email tracking and productivity management system for Samsung customer care. Automated downloading of emails from Samsung Support IDs and attendance-based allocation to support center employees. Implemented notification and issue tracking for customer tickets, reducing turnaround time to less than a day and increasing employee efficiency by 80%.',
		contract: ContractType.FullTime,
		type: 'Software Engineer',
		location: 'Noida, Uttar Pradesh, India',
		period: {
			from: new Date('2017-07-01'),
			to: new Date('2019-12-31')
		},
		skills: getSkills('email-tracking', 'productivity-management', 'automation', 'notification', 'issue-tracking'),
		name: 'Software Engineer',
		color: 'orange',
		links: [],
		logo: Assets.SAMSUNG,
		shortDescription: 'Developed email tracking and productivity management systems for Samsung customer care.'
	},
	{
		slug: 'oxane-partners',
		company: 'Oxane Partners Limited',
		description: 'Led full-stack development of an online assessment platform with MVC architecture in JAVA Spring Hibernate and AngularJS, reducing code redundancy by 60% and enhancing module performance. Streamlined XML and JSON data pipelines through automation, reducing data processing times by 50% and enhancing interoperability. Contributed to optimizing an existing financial portfolio management system, applying data structure improvements to reduce response times by 40%.',
		contract: ContractType.SelfEmployed,
		type: 'Software Developer Internship',
		location: 'New Delhi Area, India',
		period: {
			from: new Date('2016-06-01'),
			to: new Date('2016-07-31')
		},
		skills: getSkills('java', 'spring', 'hibernate', 'angularjs', 'xml', 'json'),
		name: 'Software Developer Intern',
		color: 'red',
		links: [],
		logo: Assets.OXANE,
		shortDescription: 'Developed an online assessment platform and optimized a financial portfolio management system.'
	},
	{
		slug: 'delhi-technological-university',
		company: 'Delhi Technological University',
		description: 'Worked on responsive, mobile-first front-end web development in Bootstrap for annual techfests (Phoenix, Cogenesis). Developed websites in PHP for online quizzing competitions (Cryptex). Designed and developed Android apps at Appsolute Pvt. Ltd.',
		contract: ContractType.Freelance,
		type: 'Programmer and Web Developer',
		location: 'Delhi, India',
		period: {
			from: new Date('2013-08-01'),
			to: new Date('2017-06-30')
		},
		skills: getSkills('bootstrap', 'responsive-design', 'mobile-first', 'php', 'web-development', 'android', 'app-development'),
		name: 'Programming and Web Learner',
		color: 'yellow',
		links: [],
		logo: Assets.DTU,
		shortDescription: 'Developed web and mobile applications for various university events and organizations.'
	},
	{
		slug: 'computer-society-of-india',
		company: 'Computer Society of India',
		description: 'Served as the President of the Computer Society of India Delhi Technological University Chapter. Managed team engineering, infrastructure, event design, and corporate sponsorships. Gained hands-on experience in leadership roles.',
		contract: ContractType.Freelance,
		type: 'President',
		location: 'New Delhi Area, India',
		period: {
			from: new Date('2016-06-01'),
			to: new Date('2017-05-31')
		},
		skills: getSkills('leadership', 'team-management', 'event-management', 'sponsorship'),
		name: 'President',
		color: 'teal',
		links: [],
		logo: Assets.CSI,
		shortDescription: 'Led the Computer Society of India chapter at Delhi Technological University.'
	}


];

export const title = 'Experience';
