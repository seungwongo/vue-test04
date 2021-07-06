<template>
  <div>
    <PageTitle :title="title" :title2="title2" />
  </div>
</template>
<script>
import PageTitle from "../components/PageTitle.vue";
export default {
  name: "",
  components: { PageTitle },
  data() {
    return {
      title: "부모 컴포넌트에서 전달한 페이지 제목",
      title2: "부제목 입니다.",
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>
