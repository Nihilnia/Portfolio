<template>
  <div>
    <span>Nihilcoding</span>
    <span>{{ pageTitle }}</span>
  </div>
</template>
<script>
export default {
  props: ["page-title", "sub-title"],
};
</script>

<style scoped>
div {
  max-width: fit-content;
  margin: auto;
  font-weight: 700;
}

div > span {
  background-color: #000;
  border-radius: 5px;
  padding: 5px 10px;
}

div > span:nth-child(1) {
  color: red;
}
div > span:nth-child(2) {
  color: #fff;
}
</style>
