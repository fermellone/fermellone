<template>
  <div class="home">
    <hero></hero>
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue'

export default {
  name: 'home',
  components: {
    Hero
  }
}
</script>

<style>
  .home {
    /* max-height: 80vh; */
    position: relative;
    margin: 0;
  }
</style>