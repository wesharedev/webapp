import { create } from 'mobx-persist'
import UserStore from './UserStore'
import NotificationStore from './NotificationStore'

class RootStore {
  constructor() {
    this.userStore = new UserStore(this)
    this.notificationStore = new NotificationStore(this)
  }
}

const hydrate = create({
  storage: localStorage,
  jsonify: true,
})

export const hydrateAll = (rootStore) => {
  return Promise.all([
    hydrate('user', rootStore.userStore),
  ])
}

export const rootStore = new RootStore()
