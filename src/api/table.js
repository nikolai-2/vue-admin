import { getToken } from '@/utils/auth'
import request from '@/utils/request'

export function getList(params) {
  return request({
    url: 'http://192.168.16.239:3000/user/getAll',
    method: 'get',
    headers: { 'Authorization': 'Bearer ' + getToken() }

  })
}

export function getUser(id) {
  
}
