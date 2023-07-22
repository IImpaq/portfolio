<script>
import { fade } from "svelte/transition"

import "$lib/styles/fonts.scss"
import "$lib/styles/style.scss"

import Header from "$lib/components/Header.svelte"
import Footer from "$lib/components/Footer.svelte"

export let data;
</script>


<Header />

{#key data.currentRoute}
  <main in:fade={{ duration: 100, delay: 100 }} out:fade={{ duration: 100 }}>
    <slot/>
  </main>
{/key}

<Footer />

<style lang="scss">
main {
  padding: 0;
  margin: 0;
  width: 100%;
}

:global(:root) {
  --bg-light: #FFF;
  --bg-dark: #101010;

  --text-dark: #101010;
  --text-light: #EEE;
  --text-semi: #707070;

  --box-shadow: rgba(0, 0, 0, 0.25);
}

:global(body.dark-mode) {
  --bg-light: #101010;
  --bg-dark: #FFF;

  --text-dark: #EEE;
  --text-light: #101010;
  --text-semi: #AAA;

  --box-shadow: rgba(255, 255, 255, 0.2);
}
</style>
