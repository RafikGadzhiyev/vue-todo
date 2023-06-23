<script setup lang="ts">
import PageLayout from "./layouts/PageLayout.vue";
import { addIcons } from 'oh-vue-icons'
import { MdDelete, FaRegularEdit } from 'oh-vue-icons/icons'

addIcons(MdDelete, FaRegularEdit)
</script>

<template>
  <PageLayout>
    <RouterView></RouterView>
  </PageLayout>
</template>

<style lang="sass">
</style>