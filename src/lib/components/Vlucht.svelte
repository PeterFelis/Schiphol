<script>
	export let data;
	let info = data.vluchten.flights;
	console.log(info);
</script>

{#if data}
	{#each info as flight (flight.id)}
		<p>Vluchtnummer: {flight.flightNumber}</p>
	{/each}
{/if}
