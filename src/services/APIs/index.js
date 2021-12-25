import { create as apiCreate } from 'apisauce'
import qs from 'qs'
import { Buffer } from 'buffer'

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

  const getBanners = (query) => api.get('/user/banners', query)
  const getMerchants = (params) => api.get('/user/merchants', params)
  const getMerchant = ({ id, ...request }) => api.get(`/user/merchants/${id}`, request)
  const getOrganizations = (params) => api.get('/user/organizations', params)
  const getOrganizationById = (id) => api.get('/user/organizations/' + id)
  const getOrganizationReferralLinkById = (id) => api.get('/user/organizations/referral_link/' + id)
  const setDefaultOrganization = (data) => api.put('/user/users/me/organization', data)
  const getDonations = (params) => api.get('/user/donations', params)
  const getDonationById = (id) => api.get('/user/donations/' + id)
  const setFcmToken = (data) => api.put('/user/users/session', data)

  const getNotifications = (params) => api.get('/user/notifications', params)
  const seenNotificationById = (id) => api.put(`/user/notifications/${id}/seen`)
  const seenAllNotifications = () => api.put('/user/notifications/seen-all')

  const signIn = query => api.post('/user/auths/sign-in', query)
  const signUp = query => api.post('/user/auths/sign-up', query)
  const linkPortal = query => api.post('/user/auths/portals', query)
  const signOut = () => api.delete('/user/auths/sign-out')

  const getCurrentUser = () => api.get('/user/users/me')
  const getCurrentUserReferrals = (params) => api.get('/user/users/me/referrals', params)

  const getLink = query => api.get(`/user/link?${qs.stringify(query)}`)

  const getPromotions = query => api.get(`/user/promotions?${qs.stringify(query)}`)

  const getOffers = query => api.get(`/user/offers?${qs.stringify(query)}`)

  const getCategories = query => api.get(`/user/categories?${qs.stringify(query)}`)

  const getTeams = query => api.get(`/user/teams?${qs.stringify(query)}`)
  const getTeamDetailById = (id) => api.get(`/user/teams/${id}`)
  const getTeamMembersById = (id, query) => api.get(`/user/teams/${id}/members?${qs.stringify(query)}`)

  const createTeam = body => api.post('/user/teams', body)
  const updateTeam = (id, body) => api.put(`/user/teams/${id}`, body)
  const joinTeam = (id) => api.post(`/user/teams/join/${id}`)
  const leaveTeam = (id) => api.post(`/user/teams/leave/${id}`)
  const getTeamReferralLink = (id) => api.get(`/user/teams/referral_link/${id}`)
  const createTeamInviteNotification = (id) => api.post(`/user/teams/${id}/notification`)

  const getDonationByTeamId = (id, params) => api.get(`/user/teams/${id}/donations`, params)

  const getPreSignPutUrl = (body) => api.post('/user/files', body)

  const updateUserConfig = (body) => api.put('/user/users/configs', body)
  const getOrganizationReferralLink = (id) => api.get(`/user/organizations/referral_link/${id}`)
  const createOrganizationInviteNotification = (id, query) => api.post(`/user/organizations/${id}/notification?${qs.stringify(query)}`)

  const uploadToS3 = async (signedRequest, file) => {
    const parts = signedRequest.split('amazonaws.com')
    const buf = new Buffer.from(file.data, 'base64')
    const apiUpload = apiCreate({ baseURL: `${parts[0]}amazonaws.com` })
    return apiUpload.put(parts[1], buf, {
      headers: {
        'Content-Type': file.type,
        'Content-Length': file.data.length,
        'Content-Encoding': 'base64',
      },
    })
  }

  return {
    signIn,
    signUp,
    signOut,
    getLink,
    getTeams,
    joinTeam,
    leaveTeam,
    getOffers,
    getBanners,
    uploadToS3,
    linkPortal,
    createTeam,
    updateTeam,
    setFcmToken,
    getMerchants,
    getDonations,
    getPromotions,
    getCategories,
    getCurrentUser,
    getDonationById,
    getMerchant,
    getOrganizations,
    getPreSignPutUrl,
    getNotifications,
    getTeamDetailById,
    getTeamMembersById,
    getOrganizationById,
    getOrganizationReferralLinkById,
    getTeamReferralLink,
    seenNotificationById,
    seenAllNotifications,
    setDefaultOrganization,
    getCurrentUserReferrals,
    createTeamInviteNotification,
    getDonationByTeamId,
    getOrganizationReferralLink,
    createOrganizationInviteNotification,
    updateUserConfig,
  }
}


