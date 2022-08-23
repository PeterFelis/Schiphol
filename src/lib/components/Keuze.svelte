<script>
	export let pagina;
</script>

<div>
	<form action="/" method="get">
		<input type="submit" name="page" value={parseInt(pagina) + 1} />
		<input type="submit" name="page" value={parseInt(pagina) - 1} />
	</form>
</div>

<style>
	div {
		width: 100%;
		background: yellow;
	}

	input[type='submit'] {
		padding: 2em;
	}
</style>
