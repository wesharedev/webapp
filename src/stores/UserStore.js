import { persist } from 'mobx-persist'
import { action, makeObservable, observable } from 'mobx'

class UserStore {
  constructor (rootStore) {
    this.rootStore = rootStore
    makeObservable(this)
  }

  @persist @observable token = ''
  @persist @observable ip = ''
  @persist('object') @observable user = null
  @persist('object') @observable session = null
  @observable authDialogOpen = false

  @action setToken = (token) => {
    this.token = token
  }

  @action setIP = (ip) => {
    this.ip = ip
  }

  @action setUser = (user) => {
    this.user = user
  }

  @action setSession = (session) => {
    this.session = session
  }

  @action setAuthDialogOpen = (open) => {
    this.authDialogOpen = open
  }
}

export default UserStore
