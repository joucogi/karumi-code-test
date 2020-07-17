<template>
  <b-form-input :id="id" :type="type" :placeholder="placeholder"></b-form-input>
</template>
<script>
export default {
  props: {
    id: {
      type: String,
      default: "",
      required: false
    },
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
