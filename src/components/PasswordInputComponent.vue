<template>
  <InputComponent
    :id="id"
    v-model="model"
    type="password"
    :placeholder="placeholder"
    @input="onInput"
  />
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
    },
    value: {
      type: String
    }
  },
  data() {
    return {
      model: this.value
    };
  },
  methods: {
    onInput(payload) {
      this.$emit("input", payload);
    }
  }
};
</script>
