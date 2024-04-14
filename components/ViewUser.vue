<script setup lang="ts">
import type { User } from '~/api/user'

defineProps<{
  user: User
}>()
</script>

<template>
  <div>
    <p data-test="name">名前: {{ user.name }}</p>
    <p data-test="email">メールアドレス: {{ user.email }}</p>
    <p data-test="type">種別: {{ user.type }}</p>
  </div>
</template>
