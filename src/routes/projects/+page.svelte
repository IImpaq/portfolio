<script>
  import { goto } from '$app/navigation';
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
      <div class="content" on:click={() => goto(project.url)}>
        <div class="description">
          <div class="icons">
            <PtBox3dIcon size="2xl" />
            <GitHubIcon size="2xl" />
          </div>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </div>
        <div class="meta">
          <div class="tags">
            {#each project.tags as tag}
              <h2>{tag}</h2>
            {/each}
          </div>
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
    }

    h2 {
      font-size: 1.1rem;
      color: var(--text-semi);
      padding: 0 0 1.1rem 0;
      margin: 0;
    }
  }

  .information {
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5rem;

    .content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex: 0 0 20rem;
      cursor: pointer;
      box-shadow: var(--box-shadow) 0px 3px 8px;
      border-radius: 0.5rem;
      padding: 2.5rem;
      height: 20rem;

      .description {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .icons {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          justify-self: flex-start;
        }

        h1 {
          font-size: 2rem;
          font-weight: bold;
          padding: 0;
          margin: 0;
        }

        p {
          font-size: 1rem;
          color: var(--text-semi);
          padding: 0;
          margin: 0;
        }
      }

      .meta {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        justify-self: flex-end;

        .tags {
          display: flex;
          flex-direction:row;
          align-items: center;
          gap: 1rem;

          h2 {
            font-size: 0.8rem;
            color: var(--text-semi);
            padding: 0;
            margin: 0;
          }
        }

        h2 {
          font-size: 1.0rem;
          color: var(--text-semi);
          padding: 0;
          margin: 0;
        }
      }
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
