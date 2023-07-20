<script>
  export let data;
  const { title, date, content, categories } = data;
</script>

<article>
  <h1>{ title }</h1>
  <p>Published: { date }</p>
  <svelte:component this={ content } />
</article>

{#if categories.length}
  <aside>
    <h2>Posted in:</h2>
    <ul>
      {#each categories as category}
        <li>
          <a href="/blog/category/{category}">
            {category}
          </a>
        </li>
      {/each}
    </ul>
  </aside>
{/if}

