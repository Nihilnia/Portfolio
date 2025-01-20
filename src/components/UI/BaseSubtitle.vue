<template>
  <h2>{{ title }}</h2>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style scoped>
h2 {
  text-align: center;
  font-size: 40px;
}
</style>
