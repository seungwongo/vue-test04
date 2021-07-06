<template>
  <div>
    <table style="width: 100%">
      <thead>
        <tr>
          <th :key="i" v-for="(head, i) in header">{{ head.title }}</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="i" v-for="(tr, i) in body">
          <td :key="j" v-for="(head, j) in header">{{ tr[head.key] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  props: {
    header: {
      type: Array,
      default: function () {
        return [];
      },
    },
    body: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
};
</script>
<style scoped>
table,
th,
td {
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #222;
  padding: 5px;
}
</style>
