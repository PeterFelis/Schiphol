<script>
	import Keuze from '$lib/components/Keuze.svelte';
	import Vlucht from '$lib/components/Vlucht.svelte';
	export let data;
</script>

<svelte:head>
	<title>bier</title>
</svelte:head>

<div>
	<Vlucht {data} />
</div>

<Keuze pagina={data.pagina} />

<style>
	div {
		height: 50%;
		width: 100%;
		background-color: antiquewhite;
	}
</style>
