<template>
  <div>
    <button @click="sendDataToParent">자식에서 부모로 데이터 전달</button>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      msg: "자식 컴포넌트에서 보내는 메시지",
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    sendDataToParent() {
      this.$emit("send-message", this.msg);
    },
  },
};
</script>
