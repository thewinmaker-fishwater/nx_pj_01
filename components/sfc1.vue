<script setup lang="ts">
    const color = ref("red")
</script>

<template>
  <div class="text">hello world</div>
</template>

<style>
    .text {
    color: v-bind(color);
    }
</style>


<style scoped>
    :slotted(div) {
    color: red;
    }
</style>