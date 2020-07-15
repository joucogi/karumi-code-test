<template>
  <b-form-input :type="type" :placeholder="placeholder"></b-form-input>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: "text",
      required: false
    },
    placeholder: {
      type: String,
      default: "",
      required: false
    }
  }
};
</script>
<style scoped></style>
