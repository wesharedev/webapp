import _ from 'lodash-es'

import { rootStore } from '~/stores'

const handleErrorResponse = (response) => {
  const code = _.get(response, 'data.meta.code', null)
  if (!code) return

  rootStore.notificationStore.snack(`errorMsg.${code}`)
}

const sleep = async (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export {
  sleep,
  handleErrorResponse,
}
