<script>
  import { flip } from 'svelte/animate';
  import { fade } from 'svelte/transition';
  import { Box3dPointIcon } from "@indaco/svelte-iconoir/box-3d-point";
  import { GitHubIcon } from "@indaco/svelte-iconoir/github";
  import tilt from "$lib/utils/tilt.js";

  export let data;

  let filterTerm = "";
  let filteredProjects = data.projects;


  let currentTag = "";
  /**
   * @type {any[]}
   */
  let allTags = [];
  let filteredTags = [];
  for(let project of data.projects) {
    for(let tag of project.tags) {
      if(allTags.includes(tag)) continue;

      allTags.push(tag);
      filteredTags.push(tag);
    }
  }

  const filter = () => {
    filteredProjects = data.projects.filter(project => {
      let show = true;

      if(filterTerm.length !== 0 && !project.title.toLowerCase().includes(filterTerm.toLowerCase())) show = false;
      if(currentTag.length !== 0 && !project.tags.includes(currentTag)) show = false;

      return show;
    });
  };

  const clear = () => {
    filterTerm = "";
    currentTag = "";
    filter();
  };
</script>

<section class="projects">
  <div class="title">
    <h1>Projects</h1>
    <h2>Things I worked on</h2>
  </div>

  <div class="preferences">
    <input type="text" placeholder="Filter by name" bind:value={filterTerm} on:input={filter} />
    <select name="tags" id="tags" bind:value={currentTag} on:change={filter} >
      <option value="" selected disabled hidden>All</option>
      {#each allTags as tag}
        <option value={tag}>{tag}</option>
      {/each}
    </select>
    <button on:click|preventDefault={clear}>Clear</button>
  </div>

  <div class="information">
    {#if filteredProjects.length === 0}
      <h1>No results found</h1>
    {:else}
      {#each filteredProjects as project (project)}
        <button class="content" use:tilt={{limit: 10, scale:1.025, duration:100}} on:click={() => { window.open(project.url); }} in:fade animate:flip={{duration: 0.25}} >
          <div class="description">
            <div class="icons">
              <Box3dPointIcon size="base" />
              <GitHubIcon size="base" />
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
        </button>
      {/each}
    {/if}
  </div>
</section>

<style lang="scss">
.projects {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: min(10rem, 15vw) min(15rem, 5vw) min(10rem, 15vw) min(15rem, 5vw);
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

  .preferences {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;

    input {
      border: none;
      background-color: var(--bg-light);
      padding: 1rem 1rem 1rem 1rem;
      color: var(--text-dark);
      font-family: Poppy, sans-serif;
      font-size: 1rem;
      border-bottom: 0.1rem solid var(--text-dark);
    }

    select {
      background-color: var(--bg-light);
      border: none;
      border-bottom: 0.1rem solid var(--text-dark);
      font-family: Poppy, sans-serif;
      font-size: 1rem;
      color: var(--text-dark);
    }

    button {
      margin: 0;
      padding: 1rem 2rem 1rem 2rem;
      font-size: 1.1rem;
      background-color: var(--bg-dark);
      color: var(--text-light);
      cursor: pointer;
      border: none;
      border-radius: 0.5rem;
    }
  }

  .information {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(22rem, 1fr));
    grid-auto-rows: 1fr;
    grid-auto-flow: dense;
    gap: min(2.5rem, 10vw);

    h1 {
      font-size: 2.5rem;
      padding: 8rem 0 0 0;
      margin: 0;
    }

    .content {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      flex: 0 0 20rem;
      cursor: pointer;
      box-shadow: var(--box-shadow) 0 3px 8px;
      border-radius: 0.5rem;
      padding: 2.5rem;
      background: var(--bg-light);
      border-style: none;

      .description {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        .icons {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          justify-self: flex-start;
          color: var(--text-dark);
        }

        h1 {
          color: var(--text-dark);
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
          text-align: justify;
        }
      }

      .meta {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

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
</style>
