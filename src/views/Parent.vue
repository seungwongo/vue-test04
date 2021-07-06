<template>
  <div>
    <Child ref="child_component" />
  </div>
</template>
<script>
import Child from "../components/Child.vue";

export default {
  name: "",
  components: { Child },
  data() {
    return {
      sampleData: "",
    };
  },
  setup() {},
  created() {},
  mounted() {
    //document.getElementById
    // this.$refs.child_component.$refs.btn.click();
    // this.$refs.child_component.myFunction();
    this.$refs.child_component.fullName = "Seungwon Go";
  },
  unmounted() {},
  methods: {},
};
</script>
