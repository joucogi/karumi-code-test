<template>
  <InputComponent type="email" :placeholder="placeholder" />
</template>
<script>
import InputComponent from "./InputComponent";
export default {
  components: { InputComponent },
  props: {
    placeholder: {
      type: String,
      default: "",
      required: false
    }
  }
};
</script>
