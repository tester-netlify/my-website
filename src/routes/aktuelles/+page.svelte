<script lang="ts">
  import { goto } from "$app/navigation";
</script>

<section class="aktuelles-content-wrapper">
  <h1>Aktuelles</h1>

  <div class="px-20 pt-10">
    <h2>Termine, Sitzungen, Ausschreibungen</h2>
    <div class="tiny-spacer"></div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio hic voluptatem neque consequuntur porro, accusantium sit, doloribus
      perferendis, reiciendis autem labore. Minus explicabo aperiam ratione sapiente voluptate aliquam cum est.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio hic voluptatem neque consequuntur porro, accusantium sit, doloribus
      perferendis, reiciendis autem labore. Minus explicabo aperiam ratione sapiente voluptate aliquam cum est.
    </p>
    <div class="spacer"></div>

    <div class="linked-in-integration-container">
      <div class="elfsight-app-cc7491f2-d2d0-4dff-b915-562eaab34883" data-elfsight-app-lazy></div>
    </div>

    <div class="spacer"></div>

    <button
      class="btn-basic"
      on:click={() => {
        goto("/");
      }}>Zurück zur Startseite</button>
  </div>
</section>

<style lang="postcss">
  section.aktuelles-content-wrapper {
    > h1 {
      @apply pb-5;
    }
    p {
      @apply pb-5;
    }
  }
</style>
