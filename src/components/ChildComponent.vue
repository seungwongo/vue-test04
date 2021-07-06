<template>
  <div>
    <div>{{ num }}</div>
    <div>{{ isSelected }}</div>
    <div>{{ arr.join(",") }}</div>
  </div>
</template>
<script>
export default {
  props: {
    num: {
      type: Number,
      default: 0,
    },
    isSelected: {
      type: Boolean,
      default: false,
    },
    arr: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
};
</script>
