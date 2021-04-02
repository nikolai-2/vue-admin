import request from '@/utils/request'
import {server} from './ip'

export function login(data) {
  return request({
    url: '/vue-admin-template/user/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: server+'/auth/getUser',
    method: 'get',
    headers: { 'Authorization': 'Bearer ' + token }
  })
}

export function logout() {
  return request({
    url: '/vue-admin-template/user/logout',
    method: 'post'
  })
}
