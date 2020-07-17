<template>
  <div>
    <b-button :id="id" size="lg" variant="primary" @click="$emit('click')">
      <span> {{ name }} </span>
    </b-button>
  </div>
</template>
<script>
export default {
  props: {
    id: {
      type: String,
      default: "btnId",
      required: false
    },
    name: {
      type: String,
      default: "Send",
      required: false
    }
  }
};
</script>
<style scoped>
div {
  text-align: left;
}
span {
  font-weight: bold;
}
</style>
