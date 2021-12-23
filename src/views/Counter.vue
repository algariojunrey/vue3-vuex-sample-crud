<template>
  <div class="center">
    <div>Counter: {{ $store.state.counter }}</div>
    <div>
      <button class="btn" @click="$store.dispatch('dec')">-</button>
      <button class="btn" @click="$store.dispatch('inc')">+</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style>
.center {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  font-size: 20px;
}

.btn {
  min-width: 200px;
  margin: 10px;
}
</style>
