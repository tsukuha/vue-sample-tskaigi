import { ref } from 'vue'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { getUser, type User } from '~/api/user'
export const useUserStore = defineStore('user', () => {
  const user = ref<User | undefined>(undefined)
  const getUserData = async (id: string, password: string) => {
    const res = await getUser(id, password)
    if ('message' in res) {
      alert(res.message)
      return
    }
    user.value = res
  }
  return {
    user,
    getUserData,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
