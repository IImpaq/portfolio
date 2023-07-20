<header>
  <a class="logo" href="/">G</a>

  <nav class="navbar">
    <ul>
      <li><a href="/projects">Projects</a></li>
      <li><a href="/resume">Resume</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </nav>
</header>

<style lang="scss">
header {
  padding: 1rem 5rem;
  background: #FEFEFE;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  color: #101010;

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
      gap: 2rem;
	
      a {
        text-decoration: none;
        color: inherit;
      }
    }
  }
}
</style>
