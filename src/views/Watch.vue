<template>
  <div>
    <h1>Hello, {{ fullName }}</h1>
    <input type="text" v-model="firstName" />
    <input type="text" v-model="lastName" />
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      firstName: "Seungown",
      lastName: "Go",
      fullName: "",
    };
  },
  watch: {
    firstName() {
      this.fullName = this.firstName + " " + this.lastName;
    },
    lastName() {
      this.fullName = this.firstName + " " + this.lastName;
    },
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>
