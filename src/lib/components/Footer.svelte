<script>
</script>

<footer>
  <div class="socials">
    <a href="/"><i class="icon iconoir-github"></i></a>
    <a href="/"><i class="icon iconoir-instagram"></i></a>
    <a href="/"><i class="icon iconoir-twitter"></i></a>
    <a href="/"><i class="icon iconoir-discord"></i></a>
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
  background: #101010;
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
      color: #EDEDED;
      text-decoration: none;
    }
  }
  
  .links {
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    gap: 2rem;
    list-style: none;
    padding: 0;
    margin: 0;

    .link {
      a {
        text-decoration: none;
        color: #EDEDED;
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
    color: #DDD;
  }
  
}
</style>
