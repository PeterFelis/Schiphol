<script>
	export let data;
	let info = data.vluchten.flights;
</script>

<div>
	{#if data}
		{#each info as flight (flight.id)}
			<p>Vluchtnummer: {flight.flightNumber}</p>
		{/each}
	{/if}
</div>

<style>
	div {
		height: 50vh;
		width: 100%;
		border: 1px solid red;
	}
</style>
