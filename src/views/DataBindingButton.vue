<template>
  <div>
    <input type="text" v-model="txt1" />
    <button v-bind:disabled="txt1 == ''" v-bind:class="{ active: txt1 != '' }">
      조회
    </button>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      txt1: "",
      // isActive: false,
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>
<style scoped>
.active {
  background-color: green;
}
</style>
