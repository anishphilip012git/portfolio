import { error } from '@sveltejs/kit';
import { items } from '@data/projects';
import { marked } from 'marked';
import { getProjectDescription } from '@data/projectDescription';
import { base } from '$app/paths';

export async function load({ params, fetch }) {
	const slug = params.slug;
	const project = items.find((item) => item.slug === slug);

	if (!project) {
		throw error(404, 'Project not found');
	}

	let description = '';

	try {
		const res = await fetch(`${base}/descriptions/${slug}.md`);
		console.log(`[project:${slug}]`, res.ok ? 'Loaded markdown' : 'Markdown not found, falling back');

		if (!res.ok) throw new Error(`Failed to fetch markdown for project: ${slug}`);
		const markdown = await res.text();
		description = marked.parse(markdown);
	} catch (err) {
		console.log(`[project:${slug}]`, 'Using fallback from getProjectDescription()');
		description = getProjectDescription(slug) || project.description || 'No description available.';

	}

	return {
		project: {
			...project,
			description
		}
	};
}
