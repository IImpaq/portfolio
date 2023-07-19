<script>
import { fade } from "svelte/transition"

import Header from "$lib/components/Header.svelte"
import Footer from "$lib/components/Footer.svelte"
import "$lib/styles/style.scss"

export let data;
</script>


<Header />

{#key data.currentRoute}
  <main in:fade={{ duration: 100, delay: 100 }} out:fade={{ duration: 100 }}>
    <slot />
  </main>
{/key}

<Footer />

