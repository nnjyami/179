<script>
	const range = Array.from({ length: 16 }, (_, i) => i + 1);
	const range_pc = Array.from({ length: 24 }, (_, i) => i + 1);

	let showGrids = true;
</script>

<div class="gridsWrap {showGrids ? 'showGrids' : ''}">
	<p class="gridsSwitch">
		<label>
			<input type="checkbox" bind:checked={showGrids} />
			Show Grids
		</label>
	</p>
	<div class="grids grids-wide">
		{#each range_pc as i}
			<div class="gridColumn">{i}</div>
		{/each}
	</div>
	<div class="grids grids-small">
		{#each range as i}
			<div class="gridColumn">{i}</div>
		{/each}
	</div>
</div>

<style>
	.gridsWrap {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
	}
	.gridsSwitch {
		position: fixed;
		top: 0;
		right: 0;
		font-size: var(--text-size-note);
		z-index: 2000;
	}
	.grids {
		display: grid;
		grid-template-columns: repeat(var(--gridColumn), var(--redGrid));
		gap: var(--whiteGrid);
		margin-left: var(--leftEdgeWhiteGrid);
		width: calc(100% - var(--leftEdgeWhiteGrid));
		height: 100%;
		position: relative;
		z-index: -1;
	}
	.gridColumn {
		align-items: flex-end;
		display: flex;
		justify-content: center;
		width: 100%;
		height: 100%;
		background-color: rgba(255, 0, 0, 0);
		font-size: var(--text-size-note);
		color: rgba(255, 255, 255, 0);
		transition: all 0.8s;
		pointer-events: none;
		position: relative;
		z-index: -1;
	}
	.grids-small {
		display: none;
	}
	@media all and (max-width: 900px) {
		.grids-wide {
			display: none;
		}
		.grids-small {
			display: grid;
		}
	}
	.gridsWrap.showGrids .gridColumn {
		background-color: rgba(255, 0, 0, 0.1);
		color: white;
		transition: all 0.25s;
	}
</style>
