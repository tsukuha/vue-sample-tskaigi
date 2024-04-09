<script setup lang="ts">
import type { User } from '~/api/user'
defineProps({
  user: {
    type: Object as PropType<User>,
    required: true,
  },
})
</script>

<template>
  <div>
    <p>名前: {{ user.name }}</p>
    <p>メールアドレス: {{ user.email }}</p>
    <p>種別: {{ user.type }}</p>
  </div>
</template>
