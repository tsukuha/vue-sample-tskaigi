import { ref } from 'vue'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { getUser, type User } from '~/api/user'
import { RESULT_TYPE } from '~/api/common'
export const useUserStore = defineStore('user', () => {
  const user = ref<User | undefined>(undefined)

  async function getUserData(id: string, password: string): Promise<void> {
    const res = await getUser(id, password)
    if (res.ok === RESULT_TYPE.Error) {
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
