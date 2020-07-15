<template>
  <div>
    <b-button size="lg" variant="primary">
      <span> {{ name }} </span>
    </b-button>
  </div>
</template>
<script>
export default {
  props: {
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
