<script>
  import { goto } from '$app/navigation';
  import portraitAbout from "$lib/assets/portrait-about.jpg";
  import tilt from "$lib/utils/tilt.js";

  const currentYear = new Date().getFullYear();
</script>

<section class="about">
  <div class="title" id="about">
    <h1>About me</h1>
    <h2>Introduction</h2>
  </div>
  <div class="content">
    <img class="portrait" use:tilt={{ limit: 10 }} alt="portrait" src="{portraitAbout}"/>
    <div class="information">
      <p>My name is Marcus Gugacs and I'm a Software Engineering student at TU Graz right now. My passion is developing games, game engines and low-level applications. The journey of programming started when I was 13 years old while playing Minecraft. It never stopped ever since!</p>

      <div class="stats">
        <div class="stat">
          <h2>3</h2>
          <h3>Jobs</h3>
        </div>
        <div class="stat">
          <h2>{currentYear-2013}</h2>
          <h3>Years<br>Experience</h3>
        </div>
        <div class="stat">
          <h2>132.5</h2>
          <h3>ECTS</h3>
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
  padding: min(20rem, 15vw) min(15rem, 7.5vw) 0 min(15rem, 7.5vw);
  gap: min(5rem, 5vw);

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
    gap: min(5rem, 5vw);

    .information {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: min(2rem, 5vw);

      p {
        word-wrap: break-word;
        text-align: justify;
        width: min(22rem, 55vw);
        font-size: 1.1rem;
        margin: 0;
        padding: 0;
      }
      .more {
        display: flex;
        justify-content: space-evenly;

        button {
          width: min(8rem, 22.5vw);
          height: 3rem;
          background-color: var(--bg-dark);
          border: none;
          border-radius: 0.5rem;
          color: var(--text-light);
          font-size: 1rem;
          font-weight: normal;
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
      max-height: min(30rem, 75vw);
      border-radius: 1rem;
      transform-style: preserve-3d;
      transform: rotateX(var(--rotateX)) rotateY(var(--rotateY));
      outline: 1px solid transparent;
    }

    .portrait::before {
      inset: 0.75rem;
      background: black;
      transform: translateZ(-49px);
    }
  }
}
</style>
