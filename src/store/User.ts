import { defineStore } from 'pinia'
import { UserData } from '@/types/VaccinationTypes'
import { getUserDataService } from '@/comms/services'

export const useUsers = defineStore('users', {
  state: () => ({
    usersData: null as Array<UserData> | null,
    isLoggedIn: false as boolean,
  }),
  getters: {},
  actions: {
    async getUserData(): Promise<void> {
      await getUserDataService().then((response) => {
        this.$state.usersData = response.data
      })
    },
  },
})
