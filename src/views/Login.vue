<template>
  <div>{{ user.email ? "로그인 되었습니다." : "로그인후 사용하세요." }}</div>
</template>
<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>
