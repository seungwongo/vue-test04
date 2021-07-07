<template>
  <div class="about">
    <h1>
      {{ user.email ? "This is an about page" : "로그인 후 사용가능합니다." }}
    </h1>
  </div>
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
