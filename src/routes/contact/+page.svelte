<script>
  import { NavArrowRightIcon } from "@indaco/svelte-iconoir/nav-arrow-right";
</script>

<section class="contact">
  <div class="title">
    <h1>Contact</h1>
    <h2>Get in touch</h2>
  </div>
  <div class="content">
    <div class="form">
      <div>
        <label for="name">Who are you?</label>
        <input type="text" id="name" name="name" placeholder="Your name" required />
      </div>
      <div>
        <label for="email">How can I contact you?</label>
        <input type="email" id="email" name="email" placeholder="Your email" required />
      </div>
      <div>
        <label for="topic">What do you want to talk about?</label>
        <input type="text" id="topic" name="topic" placeholder="A topic" required />
      </div>
      <div>
        <label for="message">Get into more detail...</label>
        <textarea rows=10 id="message" name="message" placeholder="Your message" required />
      </div>

      <button on:click|preventDefault={() => alert("The contact form doesn't work yet! Please send your email directly.")}>Send</button>
    </div>
    <div class="details">
      <div>
        <h3>Contact Details</h3>
        <p>iimpaq@proton.me</p>
      </div>
      <div>
        <h3>Author / Media Owner</h3>
        <p>Marcus Gugacs</p>
      </div>
      <div>
        <h3>Location</h3>
        <p>2113 Karnabrunn</p>
        <p>Austria</p>
      </div>
      <div>
        <h3>Languages</h3>
        <p>German</p>
        <p>English</p>
      </div>
      <div>
        <h3>Socials</h3>
        <p><NavArrowRightIcon size="xl" /><a href="https://github.com/IImpaq">GitHub</a></p>
        <p><NavArrowRightIcon size="xl" /><a href="https://www.instagram.com/marcus.gugacs/">Instagram</a></p>
        <p><NavArrowRightIcon size="xl" /><a href="https://twitter.com/Impaq_">Twitter</a></p>
        <p><NavArrowRightIcon size="xl" /><a href="https://www.twitch.tv/iimpaq">Twitch</a></p>
        <p><NavArrowRightIcon size="xl" /><a href="/">Discord</a></p>
      </div>
    <div>
  </div>
</section>

<style lang="scss">
.contact{
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

  .content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 5rem;
    flex-wrap: wrap;
    width: 100%;

    .form {
      display: flex;
      flex-direction: column;
      flex: 0 1 30rem; 
      gap: 2rem;

      div {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        label {
          padding: 0;
          margin: 0;
          font-size: 1.2rem;
          color: var(--text-dark);
        }

        input, textarea {
          border: none;
          background-color: var(--bg-light);
          padding: 1rem 1rem 1rem 1rem;
          color: var(--text-dark);
          font-family: Poppy, sans-serif;
          font-size: 1rem;
          border-bottom: 0.1rem solid var(--text-dark);
        }

        textarea {
          resize: vertical;
        }
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

    .details {
      display: flex;
      flex-direction: column;
      gap: 2rem;

      h3 {
        padding: 0;
        margin: 0;
        font-size: 1rem;
        color: var(--text-semi);
      }

      p {
        padding: 0;
        margin: 0;
        font-size: 1.1rem;
        color: var(--text-dark);
        display: flex;
        flex-direction: row;
        align-items: center;

        i {
          padding: 0;
          margin: 0;
        }

        a {
          text-decoration: none;
          padding: 0;
          margin: 0;
          font-size: 1.1rem;
          color: var(--text-dark);
        }
      }
    }
  }
}
</style>
