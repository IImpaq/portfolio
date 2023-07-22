<script>
  import { HalfMoonIcon } from '@indaco/svelte-iconoir/half-moon';

  var style = "color: var(--text-dark);";

  const checkForDarkMode = () => {
    style = window.document.body.classList.contains("dark-mode")
                ? "color: var(--text-dark); fill: var(--text-dark);"
                : "color: var(--text-dark);";
  }

  const toggle = () => {
    window.document.body.classList.toggle("dark-mode");
    checkForDarkMode();
  }
</script>

<header>
  <a class="logo" href="/">G</a>

  <nav class="navbar">
    <ul>
      <li><a class="link" href="/">About</a></li>
      <li><a class="link" href="/resume">Resume</a></li>
      <li><a class="link" href="/projects">Projects</a></li>
      <li><a class="link" href="/contact">Contact</a></li>
      <li><button on:click={toggle}><HalfMoonIcon class="link" style={style} size="xl" /></button></li>
    </ul>
  </nav>
</header>

<style lang="scss">
header {
  padding: 1rem 5rem;
  background: var(--bg-light);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  color: var(--text-dark);

  .logo {
    font-weight: bold;
    text-decoration: none;
    color: inherit;
    font-size: 2rem;
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

@media (max-width: 768px) {
  header {
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    gap: 1rem;

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
