<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '~/store/user'
import ViewUser from '~/components/ViewUser.vue'

const userStore = useUserStore()
const id = ref<string | undefined>(undefined)
const password = ref<string | undefined>(undefined)

function inputId(value: Event): void {
  const target = value.target as HTMLInputElement | null
  id.value = target?.value
}
function inputPassword(value: Event): void {
  const target = value.target as HTMLInputElement | null
  password.value = target?.value
}
async function confirm(): Promise<void> {
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
      <input type="text" :value="id" @input="inputId" />
    </p>
    <p>
      パスワード
      <input type="password" :value="password" @input="inputPassword" />
    </p>
    <div class="button-wrapper">
      <button type="button" @click="confirm">確認</button>
    </div>
    <ViewUser v-if="userStore?.user !== undefined" :user="userStore.user" />
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
