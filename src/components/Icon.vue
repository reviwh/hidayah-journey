<template>
  <component :is="getIconComponent"  />
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import GroupIcon from "./Icons/GroupIcon.vue";
import UpIcon from "./Icons/UpIcon.vue";
import SendMoneyIcon from "./Icons/SendMoneyIcon.vue";
import ReceiveMoneyIcon from "./Icons/ReceiveMoneyIcon.vue";
import DownIcon from "./Icons/DownIcon.vue";
import SearchIcon from "./Icons/SearchIcon.vue";

export default defineComponent({
  name: "Icon",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  components: {
    GroupIcon,
    UpIcon,
    SendMoneyIcon,
    ReceiveMoneyIcon,
    DownIcon,
    SearchIcon,
  },
  setup(props) {
    const getIconComponent = computed(() => {
      switch (props.name) {
        case "up":
          return UpIcon;
        case "down":
          return DownIcon;
        case "group":
          return GroupIcon;
        case "send-money":
          return SendMoneyIcon;
        case "receive-money":
          return ReceiveMoneyIcon;
        case "search":
          return SearchIcon;
        default:
          return null;
      }
    });

    return { getIconComponent };
  },
});
</script>
