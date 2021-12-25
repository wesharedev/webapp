import { create as apiCreate } from 'apisauce'

import { rootStore } from '~/stores'

export const create = (baseURL) => {
  const api = apiCreate({
    baseURL,
    timeout: 10000,
  })

  api.addRequestTransform((request) => {
    if (rootStore.userStore.token != null) {
      request.headers.Authorization = rootStore.userStore.token
    }
  })

  const getIP = () => api.get('/fetch/http://api.ipify.org/?format=json')

  return {
    getIP,
  }
}
