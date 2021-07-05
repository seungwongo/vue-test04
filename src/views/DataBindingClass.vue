<template>
  <!-- <div
    class="container"
    v-bind:class="{ active: isActive, 'text-red': hasError }"
  >
    Class Binding
  </div> -->
  <div>
    <input
      type="text"
      v-model="txt1"
      v-bind:class="{ 'border-red': isEmpty }"
      @blur="checkEmpty"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      txt1: "",
      isEmpty: false,
    };
  },
  methods: {
    checkEmpty() {
      if (this.txt1 == "") {
        this.isEmpty = true;
      } else {
        this.isEmpty = false;
      }
    },
  },
};
</script>
<style scoped>
.container {
  width: 100%;
  height: 200px;
}

.active {
  background-color: yellow;
  font-weight: bold;
}

.text-red {
  color: red;
}

.border-red {
  border: 2px dotted red;
}
</style>
