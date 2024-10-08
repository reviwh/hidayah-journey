<script lang="ts">
import Icon from "./IconComponent.vue";
import TextField from "./Form/TextField.vue";
export default {
  components: { TextField, Icon },
  name: "NavbarComponent",
};
</script>

<template>
  <header>
    <span class="logo">
      <a href="/">
        <img src="../assets/logo.svg" alt="Hidayah Journey" />
      </a>
    </span>
    <div>
      <text-field
        id="globalSearch"
        class-name="rounded"
        icon="search"
        placeholder="Cari di sini..."
      />
      <div class="btn-group">
        <button class="btn btn-icon">
          <icon name="notifications" />
        </button>
        <button class="btn btn-icon">
          <icon name="settings" />
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  height: 152px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  gap: 3rem;
}

header > .logo {
  width: calc(380px * var(--scale));
  padding: calc(1.875rem * var(--scale));
  height: fit-content;
}

a > img {
  width: 128px;
  height: 64px;
  aspect-ratio: 2;
  object-fit: contain;
  margin-left: 4rem;
}

header > div {
  display: flex;
  flex: 1 1 0%;
  justify-content: space-between;
  align-items: center;
  padding-right: calc(4rem * var(--scale));
}

.btn-group {
  display: flex;
  gap: calc(1rem * var(--scale));
}
</style>
