import { createStore } from 'vuex'
import { IRootState } from './types'
import login from './login'

const store = createStore<IRootState>({
  state: {
    root: true
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    login
  }
})

export function setupStore() {
  store.dispatch('login/loadLocalLogin')
}

export default store
