<template>
  <div v-if="userRole == 'Admin'">
    <button>조회</button>
    <button>생성</button>
  </div>
  <div v-else>
    <button>조회</button>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      userRole: "User",
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>
