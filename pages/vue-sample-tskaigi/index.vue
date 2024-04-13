<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '~/store/user'
import ViewUser from '~/components/ViewUser.vue'

const userStore = useUserStore()
const id = ref<string | undefined>(undefined)
const password = ref<string | undefined>(undefined)

const inputId = (value: Event) => {
  const target = value.target as HTMLInputElement | null
  id.value = target?.value
}
const inputPassword = (value: Event) => {
  const target = value.target as HTMLInputElement | null
  password.value = target?.value
}
const confirm = async () => {
  if (id.value === undefined || password.value === undefined) {
    return
  }
  await userStore.getUserData(id.value, password.value)
}
</script>

<template>
  <div>
    <p class="alert">実際のパスワードは入れないでください</p>
    <p>
      ID
      <input :value="id" @input="inputId($event)" />
    </p>
    <p>
      パスワード
      <input :value="password" @input="inputPassword($event)" />
    </p>
    <div class="button-wrapper">
      <button @click="confirm()">確認</button>
    </div>
    <ViewUser v-if="userStore.user !== undefined" :user="userStore.user" />
  </div>
</template>

<style scoped lang="sass">
input
  display: block
.button-wrapper
  display: flex
.alert
  color: red
</style>
