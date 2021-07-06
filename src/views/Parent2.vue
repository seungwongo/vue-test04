<template>
  <div>
    <Child2 @send-message="sendMessage" />
  </div>
</template>
<script>
import Child2 from "../components/Child2.vue";
export default {
  name: "",
  components: { Child2 },
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
    sendMessage(data) {
      console.log(data);
    },
  },
};
</script>
