<template>
  <div class="container" v-bind:class="[activeClass, errorClass, fontClass]">
    Class Binding
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeClass: "active",
      errorClass: "text-red",
      fontClass: "font-big",
    };
  },
};
</script>
<style scoped>
.container {
  width: 100%;
  height: 200px;
}

.active {
  background-color: yellow;
  font-weight: bold;
}

.text-red {
  color: red;
}

.font-big {
  font-size: large;
}
</style>
