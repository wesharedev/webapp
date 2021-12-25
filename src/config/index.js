import { create as createAPI } from '~/services/APIs'
import { create as createCorsAPI } from '~/services/APIs/Cors'

const Configs = {
  local: {
    API_URL: 'http://localhost',
    GOOGLE_CLIENT_ID: '',
    FACEBOOK_APP_ID: '',
  },
  dev: {
    API_URL: 'https://api-dev.weshare.asia',
    GOOGLE_CLIENT_ID: '',
    FACEBOOK_APP_ID: '',
  },
  prod: {
    API_URL: 'https://api.weshare.asia',
    GOOGLE_CLIENT_ID: '',
    FACEBOOK_APP_ID: '',
  },
}

const constants = {
  USER_PORTAL: {
    GOOGLE: 'google',
    FACEBOOK: 'facebook',
    APPLE: 'apple',
  },
  IP_URL: 'https://thingproxy.freeboard.io',
}

// eslint-disable-next-line no-undef
export const APIs = createAPI(Configs[__ENV__].API_URL)
export const CORS_APIs = createCorsAPI(constants.IP_URL)

export default {
  APIs,
  CORS_APIs,
  ...constants,
  // eslint-disable-next-line no-undef
  ...Configs[__ENV__],
}
