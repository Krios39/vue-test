<script setup lang="ts">
import { ref } from 'vue'
import { DSButton } from '@/components/ds/button'

const inputValue = ref('')

const onInputChange = (value: string): void => {
  inputValue.value = value
}

const onButtonClick = () => {
  console.log(inputValue)
}
</script>

<template>
  <div>
    <DSInput :value="inputValue" :on-change="onInputChange" />
    <DSButton :title="inputValue" :on-click="onButtonClick" />
  </div>
</template>
