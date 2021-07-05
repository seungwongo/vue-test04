<template>
  <div>
    <img v-bind:src="imgSrc" alt="" />
    <!-- <img src="@/assets/logo.png" alt="" /> -->
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      imgSrc: "https://v3.vuejs.org/logo.png",
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>
