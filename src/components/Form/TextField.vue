<template>
  <div
    :id="`${id}-field`"
    :class="[
      'text-field',
      className,
      error ? 'error' : '',
      disabled ? 'disabled' : '',
    ]"
    ref="textField"
  >
    <icon :name="icon" v-if="icon" />
    <input
      :id="id"
      :name="id"
      :type="type"
      :value="value"
      :placeholder="placeholder"
      :disabled="disabled"
      :min="min"
      :max="max"
      :step="step"
      autocomplete="off"
      ref="inputField"
    />
  </div>
</template>

<script lang="ts">
import Icon from "../IconComponent.vue";
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
    min: {
      type: String,
      default: "",
    },
    max: {
      type: String,
      default: "",
    },
    step: {
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
    const textField = document.getElementById(`${this.id}-field`);
    if (textField) {
      textField.addEventListener("click", () => {
        const input = textField.querySelector("input");
        input?.focus();
      });
    }
  },
};
</script>
