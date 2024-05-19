<script>
	import { resume_se,resume_ds, title } from '@data/resume';

	import Chip from '$lib/components/Chip/Chip.svelte';
	import CommonPage from '$lib/components/CommonPage.svelte';
</script>

<CommonPage {title}>
	<div class="resume">
		{#if resume_se}
			<a href={resume_se} download>
				<Chip size={'1.25em'}>Download SE Role Resume</Chip>
			</a>
		{/if}
		{#if resume_ds}
			<a href={resume_ds} download>
				<Chip size={'1.25em'}>Download DS Role Resume</Chip>
			</a>
		{:else}
			<Chip>Ooops! no CV at the moment.</Chip>
		{/if}
	</div>
</CommonPage>

<style lang="scss">
	.resume {
		display: flex;
		justify-content: center;
		margin-top: 20px;

		& > a {
			color: inherit;
		}
	}
</style>
