import type { Color } from './utils/colors';

export enum Platform {
	GitHub = 'github',
	StackOverflow = 'stackoverflow',
	Twitter = 'twitter',
	Linkedin = 'linkedin',
	Email = 'email',
	Facebook = 'facebook',
	Youtube = 'youtube',
	BIO = 'bio'
}

export type Icon = `i-${string}-${string}`;

export enum ContractType {
	FullTime = 'Full-time',
	PartTime = 'Part-time',
	SelfEmployed = 'Self-employed',
	Freelance = 'Freelance',
	Contract = 'Contract',
	Internship = 'Internship'
}

export type Asset = string | { light: string; dark: string };

export interface Item<S extends string = string> {
	slug: S;
	name: string;
	logo: Asset;
	shortDescription: string;
	description: string;
	screenshots?: Array<{ src: string; label: string }>;
}

export interface Link {
	to: string;
	label: string;
	newTab?: boolean;
}

export interface IconLink extends Link {
	icon: Asset;
}

export interface SkillCategory<S extends string = string> {
	slug: S;
	name: string;
}

export interface Skill<S extends string = string> extends Omit<Item<S>, 'shortDescription'> {
	color: string;
	category?: SkillCategory;
}

export interface SkillDescription {
	trivia: string;
	experience: string[];
	projects: { title: string; details: string; link?: string }[];
}

export interface Project<S extends string = string> extends Item<S> {
	links: Array<Link>;
	color: Color;
	period: {
		from: Date;
		to?: Date;
	};
	type: string;
	skills: Array<Skill<S>>;
}

export interface ProjectDescription {
	title?: string; details: string; link?: string;
	highlights: string[];
	learn: string[];
}
// // Represents a single project description
// export interface ProjectDescriptionV2 {
// 	title: string;
// 	demo?: string;  // Optional project demo URL
// 	link?: string;  // Optional project URL
// 	problem?: string;  // Problem statement or project goal
// 	role?: string;  // Role played in the project
// 	challenges?: string[];  // Key difficulties faced during the project
// 	solution?: string;  // Key solutions or features implemented
// 	details?: string;
// 	highlights?: string[];  // Key achievements or notable features
// 	impact?: string;  // Real-world significance of the project
// 	technologies?: string[];  // Tech stack used
// 	learn?: string[];  // Key learning areas from the project
// }

// // Represents a project entry
// interface Project {
// 	slug: string;
// 	color: string;
// 	description: string;
// 	shortDescription: string;
// 	links: string[];
// 	logo: string;
// 	name: string;
// 	period: {
// 		from: Date;
// 		to: Date;
// 	};
// 	skills: string[];
// 	type: string;
// }


export interface Experience<S extends string = string> extends Project<S> {
	company: string;
	location: string;
	contract: ContractType;
}

export interface Education<S extends string = string> extends Item<S> {
	organization: string;
	location: string;
	period: {
		from: Date;
		to?: Date;
	};
	subjects: Array<string>;
	degree: string;
}
