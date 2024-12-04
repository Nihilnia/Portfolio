<template>
  <MainLayout>
    <template v-slot:mainContent>
      <TypeWriterComponent text="Welcome to my website" />
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

<style></style>
