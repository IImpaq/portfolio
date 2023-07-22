<script>
  import { goto } from '$app/navigation';
  import portraitAbout from "$lib/assets/portrait-about.jpg";
</script>

<section class="about">
  <div class="title" id="about">
    <h1>About me</h1>
    <h2>Introduction</h2>
  </div>
  <div class="content">
    <img class="portrait" alt="portrait" src="{portraitAbout}"/>
    <div class="information">
      <p>My name is Marcus Gugacs and I'm a Software Engineering student at TU Graz right now. My passion is developing games, game engines and low-level applications. The journey of programming started when I was 13 years old while playing Minecraft. It never stopped ever since!</p>

      <div class="stats">
        <div class="stat">
          <h2>09</h2>
          <h3>Years<br>Experience</h3>
        </div>
        <div class="stat">
          <h2>117</h2>
          <h3>ECTS</h3>
        </div>
        <div class="stat">
          <h2>3</h2>
          <h3>Jobs</h3>
        </div>
      </div>

      <div class="more">
        <button on:click={() => goto("/resume")}>Resume</button>
        <button on:click={() => goto("/projects")}>Projects</button>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20rem 15rem 0rem 15rem;
  gap: 5rem;

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      text-align: center;
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

  .content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 5rem;

    .information {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 2rem;

      p {
        word-wrap: break-word;
        width: 22rem;
        font-size: 1.1rem;
        padding: 0 0 1.5rem 0;
        margin: 0;
        padding: 0;
      }
      .more {
        display: flex;
        justify-content: space-evenly;

        button {
          width: 8rem;
          height: 3rem;
          background-color: var(--bg-dark);
          border: none;
          border-radius: 0.5rem;
          color: var(--text-light);
          font-size: 1rem;
          font-weight: medium; 
          cursor: pointer;
        }
      }

      .stats {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;

        .stat {
          text-align: center;

          h2 {
            font-size: 1.2rem;
            padding: 0;
            margin: 0;
          }

          h3 {
            font-size: 1rem;
            padding: 0;
            margin: 0;
            color: var(--text-semi);
          }
        }
      }
    }

    .portrait {
      max-height: 30rem;
      border-radius: 1rem;
    }
  }
}

@media (max-width: 1350px) {
  .about {
    padding: 10rem 5rem 0 5rem;
  }
}

@media (max-width: 768px) {
  .about {
    padding: 5rem 5rem 0rem 5rem;
    gap: 1rem;

    .content {
      gap: 2rem;
      .information {
        p {
          text-align: justify;
          width: 16rem;
        }

        .more {
          button {
            font-size: 1rem;
            width: 6rem;
          }
        }
      }
      .portrait {
        max-height: 20rem;
      }
    }
  }
}
</style>
