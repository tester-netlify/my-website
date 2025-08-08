<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
</script>

<header>
  <div class="inner-box">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="logo" on:click={() => {goto("/");}}></div>
    <nav class="navigation">
      <button
        class="text-link-button"
        class:active={$page.url.pathname === "/stiftung"}
        on:click={() => {
          goto("/stiftung");
        }}>Stiftung</button>
      <button
        class="text-link-button"
        class:active={$page.url.pathname === "/team"}
        on:click={() => {
          goto("/team");
        }}>Team</button>
      <button
        class="text-link-button"
        class:active={$page.url.pathname === "/projekte"}
        on:click={() => {
          goto("/projekte");
        }}>Projekte</button>
      <button
        class="text-link-button"
        class:active={$page.url.pathname === "/aktuelles"}
        on:click={() => {
          goto("/aktuelles");
        }}>Aktuelles</button>
      <button
        class="text-link-button"
        class:active={$page.url.pathname === "/downloads"}
        on:click={() => {
          goto("/downloads");
        }}>Downloads</button>
      <button
        class="text-link-button"
        class:active={$page.url.pathname === "/spenden"}
        on:click={() => {
          goto("/spenden");
        }}>Spenden</button>
    </nav>
  </div>
</header>

<style lang="postcss">
  header {
    @apply h-24 w-full py-10;
    > div.inner-box {
      @apply flex items-center justify-between;

      .logo {
        @apply cursor-pointer;
        background: url(/images/logo1.png);
        width: 105px;
        height: 65px; 
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
      }

      nav.navigation {
        @apply ml-auto;
        > button {
          @apply ml-8 text-lg font-semibold;
          &:first-child {
            @apply ml-0;
          }
        }
      }
    }
  }
</style>
