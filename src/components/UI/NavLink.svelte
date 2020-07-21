<script>
  export let link
  export let label
  export let segment
  export let path = ''
  export let hasPrefetch = false
  // $: if (link === '.')
</script>

<li>
{#if hasPrefetch}
  <a rel=prefetch aria-current="{segment === {link} ? 'page' : undefined}" href="{path}{link}">{label}</a>
{:else}
  {#if link='.'}
    <a aria-current="{segment === undefined ?  'page' : undefined}" href={link}>{label}</a>
  {:else}
    <a aria-current="{segment === {link} ? 'page' : undefined}" href='{path}{link}'>{label}</a>
  {/if}
{/if}
</li>

<style>

</style>

  
