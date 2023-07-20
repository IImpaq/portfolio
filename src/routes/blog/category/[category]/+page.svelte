<script>
export let data;
</script>

<h1>Posts in {data.category}</h1>

<ul>
  {#each data.posts as post}
    <li>
      <h2>
        <a href={post.path}>{post.meta.title}</a>
      </h2>
      Published {post.date}
    </li>
  {/each}
</ul>
