<template>
  <h2>Work in progres..</h2>
</template>
<script>
export default {
  inject: ["setCurrentPage"],
  mounted() {
    this.setCurrentPage("Portfolio", "Portfolio", "Why this kind of design?");
  },
};
</script>
