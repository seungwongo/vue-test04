<template>
  <div>
    <ChildComponent :num="7" :isSelected="isSelected" :arr="arr" />
  </div>
</template>
<script>
import ChildComponent from "../components/ChildComponent.vue";
export default {
  name: "",
  components: { ChildComponent },
  data() {
    return {
      num1: 5,
      isSelected: true,
      arr: [1, 2, 3, 4],
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>
