<script>
  import { PtBox3dIcon } from "@indaco/svelte-iconoir/3d-pt-box";
  import { GitHubIcon } from "@indaco/svelte-iconoir/github";

  export let data;
</script>

<section class="projects">
  <div class="title">
    <h1>Projects</h1>
    <h2>Things I worked on</h2>
  </div>

  <div class="information">
    {#each data.projects as project}
      <div class="content">
        <div class="icons">
          <PtBox3dIcon size="2xl" />
          <GitHubIcon size="2xl" />
        </div>
        <header class="header">
          <h1>{project.title}</h1>
        </header>
        <div class="description">
          <p>{project.description}</p>
        </div>
        <div class="meta">
          <h2>Tags here</h2>
          <h2>{project.date}</h2>
        </div>
      </div>
    {/each}
  </div>
</section>

<style lang="scss">
.projects {
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

  }

  .information {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5rem;

    .content {
      .icons {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }

      .meta {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        h2 {
          font-size: 1.1rem;
          color: var(--text-semi);
          padding: 0 0 1.1rem 0;
          margin: 0;
          text-align: center;
        }
      }

      cursor: pointer;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      padding: 2rem;
      border-radius: 0.5rem;
      width: 100%;
    }
  }
}

@media (min-width: 768px) {
  .projects {
    .information {
      .content {
        width:calc(100% / 3);
      }
    }
  }
}

@media (min-width: 1350px) {
  .projects {
    .information {
      .content {
        width:calc(100% / 4);
      }
    }
  }
}
</style>
