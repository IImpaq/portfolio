<script>
  export let opened = true;
  export let onClick = () => opened = !opened;
  export let size = "10vw";
</script>


<button on:click={onClick} aria-label="open-navigation-menu">
  <svg width="{size}"
       height="{size}"
       stroke-width="0.4vw"
       stroke-linecap="round"
       stroke="currentColor"
       class:opened>
    <line class="top" x1="25%" x2="75%" y1="25%" y2="25%" />
    <line class="middle" x1="25%" x2="75%" y1="40%" y2="40%" />
    <line class="bottom" x1="25%" x2="75%" y1="55%" y2="55%" />
  </svg>
</button>

<style lang="scss">
  :root {
    --transition-duration: 250ms;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--bg-light);
    color: var(--text-dark);
    border-style: none;
    overflow: hidden;
    cursor: pointer;

    svg {
      transition: transform var(--transition-duration);

      .top {
        transition: stroke-dashoffset var(--transition-duration);
        stroke-dasharray: 40 80;
      }

      .middle {
        transition: transform var(--transition-duration);
      }

      .bottom {
        transition: stroke-dashoffset var(--transition-duration);
        stroke-dasharray: 40 80;
      }
    }

    .opened {
      transform: rotate(45deg);

      .top, .bottom {
        stroke-dashoffset: -4rem;
      }
    }
  }
</style>