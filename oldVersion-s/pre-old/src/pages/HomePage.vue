<template>
  <MainLayout :bgImage="require('@/assets/images/main.png')" currentPage="home">
    <template v-slot:mainContent>
      <TypeWriterComponent text="Hi, I am a web developer.." />
    </template>
  </MainLayout>
</template>

<script>
import MainLayout from "@/layouts/MainLayout.vue";
import TypeWriterComponent from "@/components/TypeWriterComponent.vue";

export default {
  name: "HomePage",
  components: { MainLayout, TypeWriterComponent },
};
</script>

<style scoped>
/* Add any specific styles for the HomePage */
</style>
