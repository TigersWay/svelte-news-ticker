<svelte:options tag="news-ticker" />

<script>
  import { onMount, tick  } from 'svelte';
  import { fly } from 'svelte/transition';

  export let id, duration = 6;
  let container, items = [], current = 0;

  onMount(() => {
    const nodes = id ? document.getElementById(id).children : document.getElementsByTagName('news-ticker').item(0).children;
    items = [...nodes].map(el => el.innerHTML);
    current = 0;

    const interval = setInterval(() => {
      tick;
      current = (current + 1) % items.length;
    }, duration * 1000);

    return () => {
      clearInterval(interval);
    };
  });
</script>

<div class="ticker" bind:this={container}>
  {#each items as item, i}
  {#if i==current}
  <div
    in:fly="{{ delay: 200, duration: 800, y: 40 }}"
    out:fly="{{ delay: 0, duration: 800, y: -40 }}"
  >{@html item}</div>
  {/if}
  {/each}
</div>

<style>
  .ticker {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .ticker > div {position: absolute; top: 50%; transform:translateY(-50%); background-color: pink; margin:0 .4em;}
</style>
