<script lang="ts">
  import HEADER from "../components/header.svelte";
  import FOOTER from "../components/footer.svelte";
  import "../app.pcss";
</script>

<div class="outer-wrapper">
  <HEADER />
  <div class="inner-box">
    <div class="content-container">
      <slot />
    </div>
  </div>
  <FOOTER />
</div>

<style lang="postcss">
  .outer-wrapper {
    @apply w-full bg-white;
    .inner-box {
      @apply min-h-[calc(100vh-216px)];
      .content-container {
        @apply my-10;
      }
    }
  }
</style>
