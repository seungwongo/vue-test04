<template>
  <div>
    <select v-model="city" @change="getSelectValue">
      <option value="02">서울</option>
      <option value="064">제주</option>
      <option value="21">부산</option>
    </select>
    <button @click="getSelectValue">조회</button>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      city: "064",
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    getSelectValue() {
      console.log(this.city);
    },
  },
};
</script>
