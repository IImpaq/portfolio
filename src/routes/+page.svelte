<div class="heading">
  <div class="information">
    <h1>Hi, I am Marcus</h1>
    <h2>Fullstack Developer</h2>
    <p>Software Engineering sutdent with high level experience in low-level development.</p>
    <button>Read More</button>
  </div>
  <img class="portrait" alt="portrait" src="https://images.gutefrage.net/media/fragen/bilder/wie-findet-ihr-chihuahuas/0_full.jpg?v=1615990702000"/>
</div>

<style lang="scss">
.heading {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 15rem 17.5rem;
  gap: 5rem;

  .information {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;

    h1 {
      font-size: 3rem;
      font-weight: bold;
      padding: 0;
      margin: 0;
    }

    h2 {
      color: #545454;
      padding: 0 0 1rem 0;
      margin: 0;
    }

    p {
      padding: 0 0 1rem 0;
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
    max-width: 25rem;
  }
}
</style>
