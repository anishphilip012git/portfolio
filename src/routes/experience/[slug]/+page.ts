import { error } from '@sveltejs/kit';
import { items } from '@data/experience.js';
import { marked } from 'marked';

import { base } from '$app/paths';

export async function load({ params, fetch }) {
	const slug = params.slug;
	const experience = items.find((item) => item.slug === slug);
	// console.log(experience, slug, items);
	if (!experience) {
		throw error(404, 'Project not found');
	}

	let description = '';
	// 
	try {
		const res = await fetch(`${base}/descriptions/experience/${slug}.md`);

		if (!res.ok) {
			// Suppress 404 but log it
			console.warn(`[experience:${slug}] Markdown not found (status ${res.status}), using fallback.`);
			throw new Error(`Markdown fetch failed for ${slug}`);
		}

		const markdown = await res.text();
		description = marked.parse(markdown);
	} catch (err) {
		console.log(`[experience:${slug}] Using fallback description`);
		description = experience.description || 'No description available.';
	}

	return {
		experience: {
			...experience,
			description
		}
	};
}
