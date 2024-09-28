<template>
  <component :is="getIconComponent" />
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import GroupIcon from "./Icons/GroupIcon.vue";
import UpIcon from "./Icons/UpIcon.vue";
import SendMoneyIcon from "./Icons/SendMoneyIcon.vue";
import ReceiveMoneyIcon from "./Icons/ReceiveMoneyIcon.vue";
import DownIcon from "./Icons/DownIcon.vue";
import SearchIcon from "./Icons/SearchIcon.vue";
import ArrowBackIcon from "./Icons/ArrowBackIcon.vue";
import ArrowForwardIcon from "./Icons/ArrowForwardIcon.vue";
import DateRangeIcon from "./Icons/DateRangeIcon.vue";
import DoubleArrowBackwardIcon from "./Icons/DoubleArrowBackwardIcon.vue";
import PackageIcon from "./Icons/PackageIcon.vue";
import SpaceDashboardIcon from "./Icons/SpaceDashboardIcon.vue";
import SupportAgentIcon from "./Icons/SupportAgentIcon.vue";
import TravelLuggageAndBagsIcon from "./Icons/TravelLuggageAndBagsIcon.vue";
import DoubleArrowForwardIcon from "./Icons/DoubleArrowForwardIcon.vue";
import NotificationIcon from "./Icons/NotificationIcon.vue";
import SettingsIcon from "./Icons/SettingsIcon.vue";

export default defineComponent({
  name: "IconComponent",
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
        case "arrow-back":
          return ArrowBackIcon;
        case "arrow-forward":
          return ArrowForwardIcon;
        case "date-range":
          return DateRangeIcon;
        case "double-arrow-backward":
          return DoubleArrowBackwardIcon;
        case "double-arrow-forward":
          return DoubleArrowForwardIcon;
        case "package":
          return PackageIcon;
        case "space-dashboard":
          return SpaceDashboardIcon;
        case "support-agent":
          return SupportAgentIcon;
        case "travel-luggage-and-bags":
          return TravelLuggageAndBagsIcon;
        case "notifications":
          return NotificationIcon;
        case "settings":
          return SettingsIcon;
        default:
          return null;
      }
    });

    return { getIconComponent };
  },
});
</script>
