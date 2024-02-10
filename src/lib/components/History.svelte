<section class="history">
  <div class="title">
    <h1>Timeline</h1>
    <h2>Education and Work</h2>
  </div>

  <div class="timeline">
    <div class="empty"></div>

    <div class="line">
      <div class="circle"></div>
    </div>

    <div class="component content">
      <h3>Bachelor's Degree</h3>
      <h4>2021 - today</h4>
      <p>Studying Software Engineering and Management at Graz University of Technology.</p>
    </div>

    <div class="component content">
      <h3>Austrian Red Cross</h3>
      <h4>2020 - 2021</h4>
      <p>I worked as a paramedic at the Austrian Red Cross.</p>
    </div>

    <div class="line"><div class="circle"></div></div>

    <div class="empty"></div>
    <div class="empty"></div>

    <div class="line"><div class="circle"></div></div>

    <div class="component content">
      <h3>Business Academy Donaustadt</h3>
      <h4>2015 - 2020</h4>
      <p>Business education in Vienna.</p>
    </div>
  </div> 
</section>

<style lang="scss">
.history {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: min(20rem, 15vw) min(15rem, 7.5vw) min(15rem, 7.5vw) min(15rem, 7.5vw);
  gap: min(5rem, 5vw);

  .title {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      text-align: center;
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
  }

  .timeline {
    display: grid;
    grid-template-columns: 1fr 3px 1fr;
    width: 80%;
    height: auto;
    max-width: 800px;
    margin: 0 auto;
  }

  .line {
    position: relative;
    background: var(--bg-dark);
    width: 3px;
    height: 100%;
  }

  .circle {
    position: absolute;
    top: 0;
    left: 50%;
    width: 1.1rem;
    height: 1.1rem; 
    border-radius: 50%;
    background: var(--bg-dark);
    -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
  }

  .content {
    padding: 0 1.75rem;
    transition: 0.4s ease;
    overflow-wrap: break-word !important;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;

    h3 {
      font-size: 1.2rem;
      padding: 0;
      margin: 0;
    }

    h4 {
      font-size: 1rem;
      color: var(--text-semi);
      padding: 0;
      margin: 0;
    }

    p {
      color: var(--text-dark);
      padding: 0;
      margin: 0;
    }
  }

  .content:nth-child(even) {
    text-align: right;
  }

  .component {
    margin: 0 20px 20px 20px;
  }
}

@media (max-width: 768px) {
  .history {
    .timeline {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .content {
      text-align: center;
    }

    .content:nth-child(even) {
      text-align: center;
    }
    .circle {
      display: none;
    }
  }
}
</style>
