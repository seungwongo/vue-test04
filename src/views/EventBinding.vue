<template>
  <div>
    <button v-on:click="myFunction">클릭</button>
    <button @click="myFunction">클릭</button>
    <br />
    <select v-model="sel" @change="changeSelect">
      <option value="A">A</option>
      <option value="B">B</option>
      <option value="C">C</option>
    </select>
    <br />
    <input type="text" @keyup.enter="doSearch" />
    <button @click="doSearch">조회</button>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      sel: "",
    };
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    doSearch() {
      console.log("조회 실행");
    },
    myFunction() {
      console.log("클릭 이벤트 발생");
    },
    changeSelect() {
      console.log(this.sel);
    },
  },
};
</script>
