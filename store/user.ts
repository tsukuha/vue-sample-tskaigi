import { ref } from 'vue'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { getUser, type User } from '~/api/user'
import { ResultType } from '~/api/common'
export const useUserStore = defineStore('user', () => {
  const user = ref<User | undefined>(undefined)
  const getUserData = async (id: string, password: string) => {
    const res = await getUser(id, password)
    if (res.kind === ResultType.Err) {
      alert(res.data.message)
      return
    }
    user.value = res.data
  }
  return {
    user,
    getUserData,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
