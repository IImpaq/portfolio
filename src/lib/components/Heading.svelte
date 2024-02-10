<script>
  import portraitTitle from "$lib/assets/portrait-title.jpg";
  import tilt from "$lib/utils/tilt.js";

  const scrollToAbout = () => {
    const el = document.querySelector("#about");
    if(!el) return;
    el.scrollIntoView({
      behavior: 'smooth'
    });
  }
</script>

<section class="heading">
  <div class="information">
    <h1>Hi, I'm Marcus</h1>
    <h2>Fullstack Developer</h2>
    <p>Software Engineering student with lots<br>of experience in low-level development.<br>Also occasionally working on front-end.</p>
    <button on:click={scrollToAbout}>Read More</button>
  </div>
  <img class="portrait" use:tilt={{ limit: 10 }} alt="portrait" src="{portraitTitle}"/>
</section>

<style lang="scss">
.heading {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: min(20rem, 15vw) min(15rem, 7.5vw) 0 min(15rem, 7.5vw);
  gap: 5rem;

  .information {
    display: flex;
    flex-direction: column;
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

    p {
      font-size: 1.1rem;
      padding: 0 0 1.5rem 0;
      margin: 0;
    }

    button {
      width: 8rem;
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

  .portrait {
    max-height: min(20rem, 50vw);
    border-radius: 28% 72% 65% 35% / 34% 45% 55% 66%;
    transform-style: preserve-3d;
    transform: rotateX(var(--rotateX)) rotateY(var(--rotateY));
    outline: 1px solid transparent;
  }
}

@media (max-width: 768px) {
  .heading {
    .information {
      align-items: center;

      h1 {
        text-align: center;
      }

      h2 {
        text-align: center;
      }

      p {
        text-align: center;
      }
    }
  }
}
</style>
