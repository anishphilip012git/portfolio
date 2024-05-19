import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	
	{
		degree: 'Master of Computer Science',
		description: '',
		location: 'Stony Brook, USA',
		logo: Assets.SBU,
		name: '',
		organization: 'Stony Brook University',
		period: { from: new Date(2023, 8, 23) },
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: ['Machine Learning', 'Analysis of Algorithms','Data Science','Quantum Computing','Network Security','Probability & Statistics']
	},
	{
		degree: 'Bachelor of Technology, in Software Engineering',
		description: '',
		location: 'Delhi',
		logo: Assets.DTU,
		name: '',
		organization: 'Delhi Technological University',
		period: { from: new Date(2013, 8, 1), to: new Date(2017, 8, 31) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['Object Oriented Programming','Operating System', 'Data Structures','Algorithm', 'Computer Architecture', 'Computer Networks', 'C/C++', 'Java', ]
	},
];

export const title = 'Education';
