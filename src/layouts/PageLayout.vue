<script setup lang="ts"></script>
<template>
  <div class="layout-container">
    <slot></slot>
  </div>
</template>
<style lang="sass">
.layout-container
  display: flex
  flex-direction: column
  align-items: center
  height: 100%
</style>