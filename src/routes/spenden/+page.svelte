<script lang="ts">
  import { goto } from "$app/navigation";
</script>

<section class="spenden-content-wrapper">
  <h1>Spenden</h1>
  <div class="px-20 pt-10">
    <h2>Hier können Sie unsere Arbeit unterstützen</h2>
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

    <button
      class="btn-basic"
      on:click={() => {
        goto("/");
      }}>Zurück zur Startseite</button>
  </div>
</section>

<style lang="postcss">
  section.spenden-content-wrapper {
    > h1 {
      @apply pb-5;
    }
    p {
      @apply pb-5;
    }
  }
</style>
