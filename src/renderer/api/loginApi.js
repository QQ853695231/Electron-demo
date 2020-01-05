import request from '@/utils/request'
import {servers} from './config'

export default {
  login(username, password) {
    return request({
      url: servers.url + '/login',
      method: 'post',
      data: {
        'username': username,
        'password': password
      }
    })
  },

  getInfo(token) {
    return request({
      url: '/user/info',
      method: 'get',
      params: {
        token
      }
    })
  },

  logout() {
    return request({
      url: '/user/logout',
      method: 'post'
    })
  }

}
