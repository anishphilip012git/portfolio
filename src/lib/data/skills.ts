import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import svelte from '../md/svelte.md?raw';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';
import { getSkillDescription } from './skilldescription';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
	defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
	defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
	defineSkillCategory({ name: 'Libraries', slug: 'library' }),
	defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
	defineSkillCategory({ name: 'Databases', slug: 'db' }),
	defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
	defineSkillCategory({ name: 'Cloud Provider', slug: 'cloud' }),
	defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
	defineSkillCategory({ name: 'Machine Learning & Data Science', slug: 'ml' }),
	defineSkillCategory({ name: 'Testing', slug: 'test' }),
	defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
	defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
	defineSkillCategory({ name: 'Design', slug: 'design' }),
	defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
	skill: Omit<Skill<S>, 'category'> & {
		category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
	}
): Skill<S> => {
	const out: Skill<S> = omit(skill, 'category');

	if (skill.category) {
		out.category = categories.find((it) => it.slug === skill.category);
	}

	return out;
};


export const items = [
	defineSkill({
		slug: 'python',
		color: '#3776AB',
		description:  getSkillDescription('python'),
		logo: Assets.Python,
		name: 'Python',
		category: 'pro-lang'
	  }),
	  defineSkill({
		slug: 'go',
		color: '#00ADD8',
		description: '<h1> Go is a statically typed, compiled programming language designed at Google.</h1> <br> It was created with a focus on simplicity, efficiency, and scalability. Go is widely used for building systems programming and network applications, as well as for cloud infrastructure and distributed systems.',
		logo: Assets.Go,
		name: 'Go',
		category: 'pro-lang'
	  }),
	  defineSkill({
		slug: 'js',
		color: '#F7DF1E',
		description: 'JavaScript is a high-level, interpreted programming language primarily used for creating dynamic and interactive web content. It is supported by all modern web browsers and is also used on the server-side with Node.js. JavaScript is a versatile language that can be used for building web applications, mobile applications, and even desktop applications.',
		logo: Assets.JavaScript,
		name: 'JavaScript',
		category: 'pro-lang'
	  }),
	  defineSkill({
		slug: 'java',
		color: '#E76F00',
		description: 'Java is a general-purpose, object-oriented programming language designed to be portable, secure, and robust. It was developed by Sun Microsystems (now owned by Oracle Corporation) and first released in 1995. Java is widely used for building enterprise applications, web applications, mobile applications, and games.',
		logo: Assets.Java,
		name: 'Java',
		category: 'pro-lang'
	  }),
	  defineSkill({
		slug: 'php',
		color: '#777BB4',
		description: 'PHP is a server-side scripting language designed primarily for web development. It was originally created by Rasmus Lerdorf in 1994. PHP is widely used for building dynamic websites, web applications, and APIs. It is known for its simplicity, versatility, and compatibility with various databases and web servers.',
		logo: Assets.PHP,
		name: 'PHP',
		category: 'pro-lang'
	  }),
	
	defineSkill({
		slug: 'ts',
		color: 'blue',
		description:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
		logo: Assets.TypeScript,
		name: 'Typescript',
		category: 'pro-lang'
	}),
	
	  defineSkill({
		slug: 'html',
		color: '#e34c26',
		description: 'HTML (HyperText Markup Language) is the standard markup language for creating web pages and web applications. With CSS and JavaScript, HTML forms a triad of cornerstone technologies for the web.',
		logo: Assets.HTML,
		name: 'HTML',
		category: 'lang'
	  }),
	  defineSkill({
		slug: 'css',
		color: '#264de4',
		description: 'CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML or XML. CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.',
		logo: Assets.CSS,
		name: 'CSS',
		category: 'lang'
	  }),
	  defineSkill({
		slug: 'fastapi',
		color: '#009688',
		description: 'FastAPI is a modern, fast (high-performance), web framework for building APIs with Python. It is based on the Python data validation and serialization library Pydantic and the asynchronous server implementation ASGI. FastAPI is designed to be easy to use, highly performant, and heavily documented.',
		logo: Assets.FastApi,
		name: 'FastAPI',
		category: 'framework'
	  }),
	  defineSkill({
		slug: 'sqlalchemy',
		color: '#D32F2F',
		description: 'SQLAlchemy is a Python SQL toolkit and Object-Relational Mapping (ORM) library that provides a set of high-level APIs for interacting with databases. It allows developers to write database-agnostic code, making it easy to work with different database engines and migrate between them.',
		logo: Assets.SQLALCHEMY,
		name: 'SQLAlchemy',
		category: 'db'
	  }),
	
	  defineSkill({
		slug: 'spring',
		color: '#6DB33F',
		description: 'Spring is an open-source, lightweight application framework for building enterprise-level applications in Java. It provides a comprehensive programming and configuration model, addressing various aspects of application development, such as data access, web development, security, and more.',
		logo: Assets.SPRING,
		name: 'Spring',
		category: 'framework'
	  }),
	  defineSkill({
		slug: 'hibernate',
		color: '#59666C',
		description: 'Hibernate is an Object-Relational Mapping (ORM) library for the Java programming language. It provides a framework for mapping an object-oriented domain model to a relational database. Hibernate simplifies database interactions by allowing developers to work with objects instead of writing complex SQL queries.',
		logo: Assets.HIBERNATE,
		name: 'Hibernate',
		category: 'orm'
	  }),
	// defineSkill({
	// 	slug: 'sass',
	// 	color: 'pink',
	// 	description:
	// 		'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent orci enim, congue sit amet justo eget, consequat sollicitudin libero. Etiam iaculis lectus tempor, hendrerit enim in, luctus arcu. Maecenas id enim et nibh ullamcorper auctor ac eu est. Donec imperdiet, diam quis malesuada faucibus, nibh ex gravida sapien, posuere pharetra nunc libero tristique turpis. Sed egestas laoreet semper. In hac habitasse platea dictumst. Praesent vitae est nec felis maximus facilisis. Duis luctus dui id urna tristique varius. Ut vulputate leo arcu, non bibendum arcu pulvinar eget. Fusce semper elit ut congue lacinia. Suspendisse magna diam, tempus vitae interdum eget, dictum vitae nisl. Praesent quis fringilla tortor. Donec vitae sagittis dui.',
	// 	logo: Assets.Sass,
	// 	name: 'Sass',
	// 	category: 'markup-style'
	// }),
	defineSkill({
		slug: 'reactjs',
		color: 'cyan',
		description: 'React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called "components".',
		logo: Assets.ReactJs,
		name: 'React JS',
		category: 'library'
	  }),
	  defineSkill({
		slug: 'angular',
		color: '#DD0031',
		description: 'Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Angular is written in TypeScript and implements core and optional functionality as a set of TypeScript libraries that you import into your applications.',
		logo: Assets.Angular,
		name: 'Angular',
		category: 'framework'
	  }),
	defineSkill({
		slug: 'svelte',
		color: 'orange',
		description: 'Svelte is a radical new approach to building user interfaces. Whereas traditional frameworks like React and Angular do the bulk of their work in the browser, Svelte shifts that work into a compile step that happens when you build your app.',
		logo: Assets.Svelte,
		name: 'Svelte',
		category: 'library'
	  }),
	  defineSkill({
		slug: 'bootstrap',
		color: '#7952B3',
		description: 'Bootstrap is a popular front-end framework for building responsive, mobile-first websites and web applications. It provides a collection of HTML, CSS, and JavaScript components and utilities that help developers quickly design and style user interfaces.',
		logo: Assets.Bootstrap,
		name: 'Bootstrap',
		category: 'framework'
	  }),
	  defineSkill({
		slug: 'ansible',
		color: '#EE0000',
		description: 'Ansible is an open-source software provisioning, configuration management, and application-deployment tool. It provides a simple and efficient way to automate IT infrastructure tasks, such as provisioning, configuration management, application deployment, and continuous delivery.',
		logo: Assets.ANSIBLE,
		name: 'Ansible',
		category: 'devops'
	  }),
	  
	  defineSkill({
		slug: 'docker',
		color: '#2496ED',
		description: 'Docker is an open-source platform for building, deploying, and running applications in containers. It provides a way to package applications with all their dependencies into a standardized unit, making it easier to deploy and run the same application consistently across different environments.',
		logo: Assets.Docker,
		name: 'Docker',
		category: 'devops'
	  }),
	  defineSkill({
		slug: 'jenkins',
		color: '#D24939',
		description: 'Jenkins is an open-source automation server that helps automate the non-human parts of the software development process. It supports various tasks, including building, testing, deploying, and continuous integration and delivery.',
		logo: Assets.JENKINS,
		name: 'Jenkins',
		category: 'devops'
	  }),
	  defineSkill({
		slug: 'active-directory',
		color: '#00A1F1',
		description: 'Active Directory (AD) is a directory service developed by Microsoft for Windows domain networks. It is used for centralized authentication and authorization services, as well as for managing user accounts, computers, and other resources within a network.',
		logo: Assets.ACTIVE_DIRECTORY,
		name: 'Active Directory',
		category: 'devtools'
	  }),
	  defineSkill({
		slug: 'aws',
		color: '#FF9900',
		description: 'AWS (Amazon Web Services) is a comprehensive cloud computing platform provided by Amazon, offering a wide range of services including computing power, database storage, content delivery, and other functionality to help businesses scale and grow.',
		logo: Assets.AWS,
		name: 'AWS',
		category: 'cloud'
	  }),
	  defineSkill({
		slug: 'gcp',
		color: '#4285F4',
		description: "Google Cloud Platform (GCP) is a suite of cloud computing services offered by Google. It provides a wide range of services including computing, storage, networking, big data, machine learning, and more, allowing developers to build and deploy applications on Google's infrastructure.",
		logo: Assets.GCP,
		name: 'Google Cloud Platform',
		category: 'cloud'
	  }),
	  defineSkill({
		slug: 'firebase',
		color: '#FFCA28',
		description: 'Firebase is a comprehensive app development platform provided by Google. It offers a suite of tools and services for building, improving, and growing apps across different platforms, including web, Android, and iOS. Firebase services include hosting, cloud functions, authentication, real-time database, and more.',
		logo: Assets.FIREBASE,
		name: 'Firebase',
		category: 'db'
	  }),
	  defineSkill({
		slug: 'xml',
		color: '#E37A00',
		description: 'XML (Extensible Markup Language) is a markup language that defines a set of rules for encoding documents in a format that is both human-readable and machine-readable. It is widely used for data exchange, configuration files, and document structure representation.',
		logo: Assets.Unknown,
		name: 'XML',
		category: 'lang'
	  }),
	  defineSkill({
		slug: 'json',
		color: '#000000',
		description: 'JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write and for machines to parse and generate. It is often used for transmitting data between a server and web application or for storing and transmitting structured data.',
		logo: Assets.Unknown,
		name: 'JSON',
		category: 'devtools'
	  }),
	  defineSkill({
		slug: 'terraform',
		color: '#5C4EE5',
		description: 'Terraform is an open-source infrastructure as code software tool that provides a consistent CLI workflow to manage hundreds of cloud services. Terraform codifies cloud APIs into declarative configuration files.',
		logo: Assets.Terraform,
		name: 'Terraform',
		category: 'devops'
	  }),
	  defineSkill({
		slug: 'git',
		color: '#f34f29',
		description: 'Git is a distributed version control system designed to handle everything from small to very large projects with speed and efficiency. Git is easy to learn and has a tiny footprint with lightning-fast performance.',
		logo: Assets.Git,
		name: 'Git',
		category: 'devtools'
	  }),
	  defineSkill({
		slug: 'mongodb',
		color: '#47A248',
		description: 'MongoDB is a NoSQL database that uses a document-oriented data model and supports various forms of data. It\'s one of the most popular databases for modern apps, especially those requiring a flexible schema and scalability. NoSQL databases (Not Only SQL) are non-tabular databases that store data differently than relational tables. NoSQL databases come in a variety of types based on their data model, including document, graph, key-value, and wide-column stores.',
		logo: Assets.MongoDB,
		name: 'MongoDB',
		category: 'db'
	  }),
	  defineSkill({
		slug: 'shell-scripting',
		color: '#4eaa25',
		description: 'Shell scripting is a powerful method for automating repetitive tasks and managing system operations. Scripts are written for a shell to execute commands as programs for various routines.',
		logo: Assets.Unknown,
		name: 'Shell Scripting',
		category: 'lang'
	  }),
	  defineSkill({
		slug: 'sonarqube',
		color: '#4E9BCD',
		description: 'SonarQube is an open-source platform developed by SonarSource for continuous inspection of code quality to perform automatic reviews with static analysis of code to detect bugs, code smells, and security vulnerabilities.',
		logo: Assets.Unknown,
		name: 'SonarQube',
		category: 'devtools'
	  })
	 

] as const;

export const title = 'Skills';

export const getSkills = (
	...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
	query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
	const out: ReturnType<typeof groupByCategory> = [];

	const others: Array<Skill> = [];

	items.forEach((item) => {
		if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;

		// push to others if item does not have a category
		if (!item.category) {
			console.log(item.category);
			others.push(item);
			return;
		}

		// check if category exists
		let category = out.find((it) => it.category.slug === item.category?.slug);

		if (!category) {
			category = { items: [], category: item.category };

			out.push(category);
		}

		category.items.push(item);
	});

	if (others.length !== 0) {
		out.push({ category: { name: 'Others', slug: 'others' }, items: others });
	}

	return out;
};

