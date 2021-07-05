<template>
  <div></div>
</template>
<script>
import axios from "axios";
export default {
  name: "",
  components: {},
  data() {
    return {
      url: "https://b1e5b8ea-4ddb-49b8-9239-f62e6fea9a35.mock.pstmn.io/getUserList",
      userList: [],
    };
  },
  setup() {},
  created() {},
  mounted() {
    this.getUserList();
  },
  unmounted() {},
  methods: {
    async getUserList() {
      this.userList = (await axios.get(this.url)).data.data;
      console.log(this.userList);
    },
  },
};
</script>
