<script>
  import { GitHubIcon } from "@indaco/svelte-iconoir/github";
  import { InstagramIcon } from "@indaco/svelte-iconoir/instagram";
  import { TwitterIcon } from "@indaco/svelte-iconoir/twitter";
  import { ModernTvIcon } from "@indaco/svelte-iconoir/modern-tv";
  import { DiscordIcon } from "@indaco/svelte-iconoir/discord";
</script>

<footer>
  <div class="socials">
    <a href="https://github.com/IImpaq"><GitHubIcon size="2xl" /></a>
    <a href="https://www.instagram.com/marcus.gugacs/"><InstagramIcon size="2xl" /></a>
    <a href="https://twitter.com/Impaq_"><TwitterIcon size="2xl" /></a>
    <a href="https://www.twitch.tv/iimpaq"><ModernTvIcon size="2xl" /></a>
    <a href="/"><DiscordIcon size="2xl" /></a>
  </div>
  <ul class="links">
    <li class="link"><a href="/">About</a></li>
    <li class="link"><a href="/projects">Projects</a></li>
    <li class="link"><a href="/resume">Resume</a></li>
    <li class="link"><a href="/blog">Blog</a></li>
    <li class="link"><a href="/contact">Contact</a></li>
  </ul>
  <div class="copyright">
    <p>Marcus Gugacs © 2023</p>
  </div>
</footer>

<style lang="scss">
footer {
  background-color: var(--bg-dark);
  padding: 4rem 0rem;
  width: 100%;
  margin: auto 0;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  gap: 2rem;

  .socials {
    display: flex;
    justify-content: center;
    align-content: center;
    column-gap: 1.25rem;
    padding: 0;

    a {
      font-size: 1.5rem;
      color: var(--text-light);
      text-decoration: none;
    }
  }
  
  .links {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    gap: 2rem;
    list-style: none;
    padding: 0;
    margin: 0;

    .link {
      a {
        text-decoration: none;
        color: var(--text-light);
        font-size: 1rem;
      }
    }
  }

  .copyright {
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    gap: 2rem;
    padding: 0;
    font-size: 0.9rem;
    color: var(--text-light);
  }
  
}
</style>
