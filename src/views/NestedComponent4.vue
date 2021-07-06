<template>
  <div>
    <DataGrid :header="header" :body="body" />
  </div>
</template>
<script>
import DataGrid from "../components/DataGrid.vue";

export default {
  name: "",
  components: { DataGrid },
  data() {
    return {
      header: ["이름", "연락처"],
      body: [
        ["유재석", "010-2333-0000"],
        ["김종국", "010-0000-0000"],
      ],
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {},
};
</script>
