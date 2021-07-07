<template>
  <div>
    <p>{{ count }}</p>
    <button @click="addCart">장바구니추가</button>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      sampleData: "",
    };
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
    cart() {
      return this.$store.state.cart;
    },
  },
  setup() {},
  created() {},
  updated() {
    console.table(this.cart);
  },
  mounted() {},
  unmounted() {},
  methods: {
    addCart() {
      this.$store.commit("addCart", {
        productId: "1",
        productName: "마우스",
        price: 12000,
      });
    },
  },
};
</script>
