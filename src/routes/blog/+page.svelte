<script>
  import { goto } from '$app/navigation';

  export let data;
</script>

<section class="blog">
  <div class="title">
    <h1>Blog Posts</h1>
    <h2>Topics that interest me</h2>
  </div>
  
  <ul class="posts">
    {#each data.posts as post}
      <li class="post" on:click={() => goto(post.path)}>
        <h3>{post.meta.title}</h3>
        <h4>{post.date}</h4>
        <p>{post.preview}</p>
      </li>
    {/each}
  </ul>
</section>

<style lang="scss">
.blog {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10rem 15rem 20rem 15rem;
  gap: 5rem;

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 3rem;
      font-weight: bold;
      padding: 0 0 0.2rem 0;
      margin: 0;
      text-align: center;
    }

    h2 {
      font-size: 1.1rem;
      color: var(--text-semi);
      padding: 0 0 1.1rem 0;
      margin: 0;
      text-align: center;
    }
  }

  .posts {
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
    justify-content: center;
    align-items: center;
    list-style: none;
    grid-gap: 2rem;
    width: 90%;

    .post {
      display: flex;
      flex-direction: column;
      border: none;
      box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.25);
      border-radius: 0.25rem;
      padding: 2rem 1rem;
      transition: 0.2s ease-in-out;

      h3 {
        margin: 0;
        padding: 0;
        font-size: 1.5rem;
      }

      h4 {
        margin: 0;
        padding: 0rem 0rem 1rem 0rem;
        font-size: 1rem;
        color: var(--text-semi);
      }

      p {
        margin: 0;
        padding: 0;
      }
    }

    .post:hover {
      cursor: pointer;
      box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.4);
    }
  }
}
</style>
