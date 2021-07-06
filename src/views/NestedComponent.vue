<template>
  <div>
    <PageTitle
      title="부모 컴포넌트에서 전달한 페이지 제목"
      title2="부제목 입니다."
    />
  </div>
</template>
<script>
import PageTitle from "../components/PageTitle.vue";
export default {
  name: "",
  components: { PageTitle },
  data() {
    return {
      sampleData: "",
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>
