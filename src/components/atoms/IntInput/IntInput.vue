<template >
  <input
    :value="value"
    class="int__input"
    v-bind="$attrs"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  inheritAttrs: false,
  props: ["value"]
};
</script>

