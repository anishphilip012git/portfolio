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

		if (!res.ok) {
			// Suppress 404 but log it
			console.warn(`[project:${slug}] Markdown not found (status ${res.status}), using fallback.`);
			throw new Error(`Markdown fetch failed for ${slug}`);
		}

		const markdown = await res.text();
		description = marked.parse(markdown);
	} catch (err) {
		console.log(`[project:${slug}] Using fallback description`);
		description = getProjectDescription(slug) || project.description || 'No description available.';
	}

	return {
		project: {
			...project,
			description
		}
	};
}
