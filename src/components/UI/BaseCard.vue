<template>
  <div>
    <h4>{{ title }}</h4>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: ["title", "description"],
};
</script>

<style scoped>
div {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  color: #fff;
  background: transparent;
  border: 1px solid #fff;
}
</style>
