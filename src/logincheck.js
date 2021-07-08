export default {
  mounted() {
    this.checkLogin();
  },
  methods: {
    checkLogin() {
      if (!this.$state.user.email) {
        console.log("로그인 하세요.")
      }
    }
  }
}