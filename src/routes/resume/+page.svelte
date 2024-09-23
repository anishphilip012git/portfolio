<script>
	import { resume_se,resume_ds, title, resume_devops } from '@data/resume';

	import Chip from '$lib/components/Chip/Chip.svelte';
	import CommonPage from '$lib/components/CommonPage.svelte';

	/**
	 * @type {string | null}
	 */
	let pdfToView = null;

	// Function to set the PDF for viewing
	/**
	 * @param {string} type
	 */
	function viewPDF(type) {
		if (type === 'se') {
			pdfToView = resume_se;
		} else if (type === 'ds') {
			pdfToView = resume_ds;
		} else if (type === 'devops') {
			pdfToView = resume_devops;
		}
	}
</script>

<CommonPage {title}>
	<div class="resume">
		{#if resume_se}
			<Chip size={'1.25em'} on:click={() => viewPDF('se')}>View SE Role Resume</Chip>
			<!-- <a href={resume_se} download>
				<Chip size={'1.25em'}>Download SE Role Resume</Chip>
			</a> -->
		{/if}
		{#if resume_ds}
			<Chip size={'1.25em'} on:click={() => viewPDF('ds')}>View DS Role Resume</Chip>
			<!-- <a href={resume_ds} download>
				<Chip size={'1.25em'}>Download DS Role Resume</Chip>
			</a> -->
		{/if}
		{#if resume_devops}
			<Chip size={'1.25em'} on:click={() => viewPDF('devops')}>View DevOps Role Resume</Chip>
			<!-- <a href={resume_devops} download>
				<Chip size={'1.25em'}>Download DevOps Role Resume</Chip>
			</a> -->
		{:else}
			<Chip>Ooops! no CV at the moment.</Chip>
		{/if}

		{#if pdfToView}
			<div class="pdf-container">
				<iframe src={pdfToView} width="100%" height="800px"></iframe>
			</div>
		{/if}
	</div>
</CommonPage>

<style lang="scss">
	.resume {
		display: flex;
		justify-content: center;
		margin-top: 20px;
		flex-direction: column;
		align-items: center;

		& > a {
			color: inherit;
		}

		& > div {
			margin-top: 20px;
		}
	}

	.pdf-container {
		width: 90%;
		max-width: 1200px; /* Ensures it doesn't get too wide on large screens */
		margin: 20px 0;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
	}

	iframe {
		border: none;
		width: 100%;
		height: 800px; /* Increased height for better readability */
	}

	@media (max-width: 768px) {
		.pdf-container {
			width: 100%; /* Full width for mobile screens */
		}

		iframe {
			height: 600px; /* Adjusted height for smaller devices */
		}
	}

	@media (max-width: 480px) {
		iframe {
			height: 500px; /* Further adjustment for very small devices */
		}
	}
</style>
