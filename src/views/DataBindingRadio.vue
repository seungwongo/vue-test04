<template>
  <div>
    <label><input type="radio" value="02" v-model="selectedCity" /> 서울</label>
    <label
      ><input type="radio" value="064" v-model="selectedCity" /> 제주</label
    >
    <label><input type="radio" value="21" v-model="selectedCity" /> 부산</label>
    <br />
    <div>선택한 지역: {{ selectedCity }}</div>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      selectedCity: "",
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>
