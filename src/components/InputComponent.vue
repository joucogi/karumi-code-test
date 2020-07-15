<template>
  <b-form-input :type="type" :placeholder="placeholder"></b-form-input>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: "email",
      required: false
    },
    placeholder: {
      type: String,
      default: "password",
      required: false
    }
  }
};
</script>
<style scoped></style>
