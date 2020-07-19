<template>
  <div>
    <button :id="id" size="lg" variant="primary" @click="$emit('click')">
      <span> {{ name }} </span>
    </button>
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
