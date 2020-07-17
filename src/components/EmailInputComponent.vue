<template>
  <InputComponent :id="id" type="email" :placeholder="placeholder" />
</template>
<script>
import InputComponent from "./InputComponent";
export default {
  components: { InputComponent },
  props: {
    id: {
      type: String,
      default: "",
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
