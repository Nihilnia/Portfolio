<template>
  <h2>Work in progres..</h2>
</template>

<script>
export default {
  inject: ["setCurrentPage"],
  mounted() {
    this.setCurrentPage("About me", "About me", "Where to start?");
  },
};
</script>
