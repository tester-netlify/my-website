<script lang="ts">
  const currentYear = new Date().getFullYear();
  import { goto } from "$app/navigation";
</script>

<footer>
  <div class="inner-box">
    <h4>PRO Civibus &copy; {currentYear}</h4>
    <nav class="footer-navigation">
      <button
        class="text-link-button on-dark"
        on:click={() => {
          goto("/impressum");
        }}>Impressum</button>
      <button
        class="text-link-button on-dark"
        on:click={() => {
          goto("/datenschutz");
        }}>Datenschutz</button>
      <button
        class="text-link-button on-dark "
        on:click={() => {
          goto("/kontakt");
        }}>Kontakt</button>
    </nav>
  </div>
</footer>

<style lang="postcss">
  footer {
    @apply h-20 w-full bg-primary py-6;
    > div.inner-box {
      @apply flex items-center justify-between;

      h4 {
        @apply text-white;
      }

      nav.footer-navigation {
        @apply ml-auto;
        > button {
          @apply ml-8 font-semibold;
          &:first-child {
            @apply ml-0;
          }
        }
      }
    }
  }
</style>
