<script>
  export let data;
  const { title, date, content, categories } = data;
</script>

<section class="post">
  <article class="content">
    <h1 class="title">{ title }</h1>
    <h2 class="meta">by Marcus Gugacs @ { date }</h2>
    <svelte:component this={ content } />
  </article>

  <!--{#if categories.length}
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
  {/if}-->
</section>

<style lang="scss">
.post {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10rem 0rem 20rem 0rem;
  gap: 5rem;
  width: 70%;

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;

    .title {
      font-size: 3rem;
      font-weight: bold;
      padding: 0 0 0.2rem 0;
      margin: 0;
    }

    .meta {
      font-size: 1.1rem;
      color: var(--text-semi);
      padding: 0 0 1.1rem 0;
      margin: 0;
    }
  }
}
</style>
