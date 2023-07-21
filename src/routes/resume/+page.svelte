<script>
</script>

<section class="resume">
  <div class="title">
    <h1>Resume</h1>
    <h2>My Qualifications</h2>
  </div>

  <div class="information">
    <div class="content">
      <header class="header">
        <h1>TU Graz</h1>
        <h2>2023</h2>
      </header>
      <div class="description">
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
    <div class="content">
      <header class="header">
        <h1>Willhaben</h1>
        <h2>201x</h2>
      </header>
      <div class="description">
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
    <div class="content">
      <header class="header">
        <h1>Glorit</h1>
        <h2>201x</h2>
      </header>
      <div class="description">
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
    <div class="content">
      <header class="header">
        <h1>CSC</h1>
        <h2>201x</h2>
      </header>
      <div class="description">
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  </div>
</section>

<style lang="scss">
.resume {
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

  .information {
    display: flex;
    flex-direction: column;
    align-items: top;
    gap: 5rem;
    width: 100%;

    .content {
      display: flex;
      flex-direction: row;
      align-items: top;
      justify-content: center;
      gap: 2rem;
      color: var(--text-light);

      .header {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 0.5rem;

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
    padding: 10rem 2.5rem 20rem 2.5rem;

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
