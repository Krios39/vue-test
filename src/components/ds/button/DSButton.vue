<script setup lang="ts">
import type { ButtonProps } from './model'

const { title, onClick } = defineProps<ButtonProps>()

const onButtonClick = (e: MouseEvent): void => {
  e.preventDefault()
  onClick()
}
</script>

<template>
  <button class="ds-button" @click="onButtonClick">{{ title.trim() }}</button>
</template>

<style>
.ds-button {
  background: grey;
  padding: 5px;
  border-radius: 5px;
  color: white;

  &:hover {
    background: #494848;
    cursor: pointer;
  }
}
</style>
