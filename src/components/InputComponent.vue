<template>
  <b-form-input
    :id="id"
    :type="type"
    v-model="model"
    :placeholder="placeholder"
    @input="onInput"
  ></b-form-input>
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
<style scoped></style>
