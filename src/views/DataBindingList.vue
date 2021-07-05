<template>
  <div>
    <select v-model="selectedDrink">
      <!-- <option :value="drink.drinkId" :key="i" v-for="(drink, i) in drinkList">
        {{ drink.drinkName }}
      </option> -->
      <option
        :value="drink.drinkId"
        :key="drink.drinkId"
        v-for="drink in drinkList"
      >
        {{ drink.drinkName }}
      </option>
    </select>
    <table>
      <thead>
        <tr>
          <th>제품코드</th>
          <th>제품명</th>
          <th>가격</th>
          <th>주문수</th>
          <th>합계</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="drink.drinkId" v-for="drink in drinkList">
          <td>{{ drink.drinkId }}</td>
          <td>{{ drink.drinkName }}</td>
          <td>{{ drink.price }}</td>
          <td><input type="number" v-model="drink.qty" /></td>
          <td>{{ drink.price * drink.qty }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      selectedDrink: "",
      drinkList: [
        {
          drinkId: "1",
          drinkName: "코카콜라",
          price: 700,
          qty: 1, //qty
        },
        {
          drinkId: "2",
          drinkName: "오렌지주스",
          price: 1200,
          qty: 1,
        },
        {
          drinkId: "3",
          drinkName: "커피",
          price: 500,
          qty: 1,
        },
        {
          drinkId: "4",
          drinkName: "물",
          price: 700,
          qty: 1,
        },
        {
          drinkId: "5",
          drinkName: "보리차",
          price: 1200,
          qty: 1,
        },
        {
          drinkId: "6",
          drinkName: "포카리",
          price: 1000,
          qty: 1,
        },
        {
          drinkId: "7",
          drinkName: "뽀로로",
          price: 1300,
          qty: 1,
        },
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

<style scoped>
table {
  width: 100%;
}

table,
th,
td {
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #222;
  padding: 10px;
}
</style>
