<template>
  <div>{{ user.email ? "콘텐츠를 보여줍니다." : "로그인후 사용하세요." }}</div>
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
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  setup() {},
  created() {},
  mounted() {
    if (!this.user.email) {
      this.$router.push({ path: "/login" });
    }
  },
  unmounted() {},
  methods: {},
};
</script>
