<script lang="ts">
  import { goto } from "$app/navigation";
</script>

<section class="danke-content-wrapper">
  <div class="px-20 pt-10">
    <h1 class="text-center">Vielen Dank für Ihre Nachricht</h1>
    <p>Wir haben Ihre Anfrage erhalten und werden uns in Kürze bei Ihnen zurückmelden...</p>

    <div class="spacer"></div>
    <div class="flex w-full justify-center">
      <button
        class="btn-basic"
        on:click={() => {
          goto("/");
        }}>Zurück zur Startseite</button>
    </div>
  </div>
</section>

<style lang="postcss">
  section.danke-content-wrapper {
    > h1 {
      @apply pb-5 text-center;
    }
    p {
      @apply pb-5 text-center;
    }
  }
</style>
