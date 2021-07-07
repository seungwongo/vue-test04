<template>
  <div>
    <button @click="login">로그인</button
    ><button @click="logout">로그아웃</button>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      sampleData: "",
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    login() {
      this.$store.commit("user", {
        id: "seungwongo",
        email: "seungwon.go@gmail.com",
        name: "Seungwon Go",
      });
    },
    logout() {
      this.$store.commit("user", {});
    },
  },
};
</script>
