<template>
  <div>
    <div>
      <h1>Hello {{ title1 }}</h1>
    </div>
    <div>
      <h1>Hello {{ title2 }}</h1>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      title1: "World",
      title2: "Jeremy",
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>
