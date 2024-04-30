<script setup lang="ts">
import type { InputProps } from './models'

const { onChange, value } = defineProps<InputProps>()


const onInputChange = (e: Event) => {
  const inputTarget = e.target as HTMLInputElement
  onChange(inputTarget.value)
}

</script>

<template>
  <div class="input-container">
    <input @value="value" @input="onInputChange" class="inner-input">
  </div>
</template>

<style>
.input-container {
  border-radius: 10px;
  border: 1px solid #000;

  .inner-input {
    width: 100%;
    padding: 10px;
  }
}
</style>