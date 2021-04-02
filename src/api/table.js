import { getToken } from '@/utils/auth'
import request from '@/utils/request'
import {server} from './ip'

export function getList(params) {
  return request({
    url: server+'/user/getAll',
    method: 'get',
    headers: { 'Authorization': 'Bearer ' + getToken() }

  })
}

export function getUser(id) {
  
}
