<template>
  <div
    :id="id"
    :class="[
      'text-field',
      className,
      error ? 'error' : '',
      disabled ? 'disabled' : '',
    ]"
    ref="textField"
  >
    <icon :name="icon" color="" size="32" v-if="icon" />
    <input
      :name="id"
      :type="type"
      :value="value"
      :placeholder="placeholder"
      :disabled="disabled"
      ref="inputField"
    />
  </div>
</template>

<script lang="ts">
import Icon from "./Icon.vue";
export default {
  components: { Icon },
  name: "TextField",
  props: {
    id: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    value: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    error: {
      type: Boolean,
      default: false,
    },
    className: {
      type: String,
      default: "",
    },
  },
  mounted() {
    const textField = document.getElementById(this.id);
    if (textField) {
      textField.addEventListener("click", () => {
        const input = textField.querySelector("input");
        input?.focus();
      });
    }
  },
};
</script>
