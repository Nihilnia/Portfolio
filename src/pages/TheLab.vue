<template>
  <h2>Work in progres..</h2>
</template>

<script>
export default {
  inject: ["setCurrentPage"],
  mounted() {
    this.setCurrentPage("Lab", "Laboratory", "Someo of my collections");
  },
};
</script>
