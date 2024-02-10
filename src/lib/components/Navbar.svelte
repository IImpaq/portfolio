<script>
  import { HalfMoonIcon } from '@indaco/svelte-iconoir/half-moon';
  import Hamburger from "$lib/components/Hamburger.svelte";

  let style = "color: var(--text-dark);";
  let opened = false;
  let navbarWidth;

  const checkForDarkMode = () => {
    style = window.document.body.classList.contains("dark-mode")
                ? "color: var(--text-dark); fill: var(--text-dark);"
                : "color: var(--text-dark);";
  }

  const toggle = () => {
    window.document.body.classList.toggle("dark-mode");
    checkForDarkMode();
  }

  let onClick = () => opened = !opened;
</script>

<header bind:clientWidth={navbarWidth}>
  {#if navbarWidth < 768}
    <div class="mobile">
      <a class="logo" href="/">G</a>
      <Hamburger size="7.5vw" {opened} {onClick}/>
    </div>
  {:else}
    <div class="desktop">
      <a class="logo" href="/">G</a>
    </div>
  {/if}

  {#if opened || navbarWidth >= 768}
    <nav class="navbar">
      <ul>
        <li><a class="link" href="/">About</a></li>
        <li><a class="link" href="/resume">Resume</a></li>
        <li><a class="link" href="/projects">Projects</a></li>
        <li><a class="link" href="/contact">Contact</a></li>
        <li><button on:click={toggle}><HalfMoonIcon class="link" style={style} size="xs" /></button></li>
      </ul>
    </nav>
  {/if}
</header>

<style lang="scss">
header {
  // padding: 1rem 5rem;
  padding: min(2rem, 5vw) min(4rem, 10vw);
  background: var(--bg-light);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  color: var(--text-dark);

  .mobile {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .logo {
      font-weight: bold;
      text-decoration: none;
      color: inherit;
      font-size: 2rem;
    }
  }

  .desktop {
    .logo {
      font-weight: bold;
      text-decoration: none;
      color: inherit;
      font-size: 2rem;
    }
  }

  .navbar {
    ul {
      margin: 0;
      list-style-type: none;
      display: flex;
      align-items: center;
      gap: 2rem;

      li {
        .link {
          text-decoration: none;
          color: inherit;
        }

        button {
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
        }
      }
    }
  }
}

@media (max-width: 782px) {
  header {
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    gap: 1rem;
    // padding: 1rem 2.5rem;
    // padding: min(5vw, 2.5rem);

    .navbar {
      ul {
        gap: 1rem;
        padding: 0;
        flex-direction: column; 
      }
    }
  }
}
</style>
