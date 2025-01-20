<template>
  <header>{{ title }}</header>
</template>

<script>
export default {
  props: ["title"],
};
</script>

<style scoped>
header {
  font-size: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  padding-bottom: 4px;
}
</style>
