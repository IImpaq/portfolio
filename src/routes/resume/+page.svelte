<script>
  export let data;
</script>

<section class="resume">
  <div class="title">
    <h1>Resume</h1>
    <h2>My Qualifications</h2>
  </div>

  <div class="information">
    {#each data.jobs as job}
      <div class="content">
        <header class="header">
          <h1>{job.title}</h1>
          <h2>{job.date}</h2>
        </header>
        <div class="description">
          <p>{job.description}</p>
        </div>
      </div>
    {/each}
  </div>
</section>

<style lang="scss">
.resume {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: min(20rem, 15vw) min(15rem, 7.5vw) min(15rem, 10vw) min(15rem, 7.5vw);
  gap: min(5rem, 5vw);

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

  .information {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    gap: min(5rem, 10vw);

    .content {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      justify-content: center;
      gap: min(2rem, 3vw);
      color: var(--text-light);

      .header {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: min(2rem, 3vw);

        h1 {
          text-align: right;
          width: 10rem;
          background: var(--bg-dark);
          margin: 0;
          padding: 1rem 1rem 1rem 1rem;
          color: var(--text-light);
          white-space: nowrap;
          border-radius: 0.5rem;
        }

        h2 {
          text-align: right;
          color: var(--text-semi);
          margin: 0;
          padding: 0;
        }
      }

      .description {
        flex: 0 1 50rem;

        p {
          padding: 0;
          margin: 0;
          text-align: justify;
          color: var(--text-dark);
        }
      }
    }
  }
}

@media (max-width: 1152px) {
  .resume {
    .information {
      .content {
        flex-wrap: wrap;
        justify-content: center;

        .header {
          align-items: center;

          h1 {
            text-align: center;
          }

          h2 {
            text-align: center;
          }
        }
      }
    }
  }
}
</style>
