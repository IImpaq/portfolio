<script>
  import portraitTitle from "$lib/assets/portrait-title.jpg";
</script>

<section class="heading">
  <div class="information">
    <h1>Hi, I'm Marcus</h1>
    <h2>Fullstack Developer</h2>
    <p>Software Engineering sutdent with lots<br>of experience in low-level development.<br>Also occasionally working on front-end.</p>
    <button>Read More</button>
  </div>
  <img class="portrait" alt="portrait" src="{portraitTitle}"/>
</section>

<style lang="scss">
.heading {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 20rem 15rem 0 15rem;
  gap: 5rem;

  .information {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;

    h1 {
      font-size: 3rem;
      font-weight: bold;
      padding: 0 0 0.2rem 0;
      margin: 0;
    }

    h2 {
      font-size: 1.1rem;
      color: #707070;
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
      background-color: #101010;
      border: none;
      border-radius: 0.5rem;
      color: #EEE;
      font-size: 1rem;
      font-weight: medium; 
      cursor: pointer;
    }
  }

  .portrait {
    max-height: 20rem;
    border-radius: 28% 72% 65% 35% / 34% 45% 55% 66%;
  }
}
</style>
