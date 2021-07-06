<template>
  <h1 class="page-title">
    {{ title }} (<small>{{ title2 }}</small
    >)
  </h1>
</template>
<script>
export default {
  name: "",
  components: {},
  props: {
    title: {
      type: String,
      default: "페이지 제목",
    },
    title2: {
      type: String,
      default: "부제목",
    },
  },
};
</script>
<style scoped>
.page-title {
  border-left: 4px solid red;
  padding-left: 5px;
  text-align: left;
}
</style>
