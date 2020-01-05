import {servers} from './config'
import request from '@/utils/request'
import { getToken } from '../utils/auth'
export function findByCondition(params) {
  params.username = getToken().yhbh
  return request({
    url: servers.url + '/user/page',
    method: 'get',
    params: params
  })
}

export function findByUnitId(params) {
  return request({
    url: servers.url + '/unit/users/page',
    method: 'get',
    params: params
  })
}



export function createUser(data) {
  let param = {createUser: getToken().yhbh };

  return request({
    url: servers.url + '/user',
    method: 'post',
    data,
    params: param
  })
}

export function updateUser(data) {
  let param = {updateUser: getToken().yhbh };
  return request({
    url: servers.url + `/user`,
    method: 'put',
    data,
    params: param
  })
}
export function deleteUser(id) {
  return request({
    url: servers.url + `/user/${id}`,
    method: 'delete'
  })
}

export function getSubUnitsWithUsers(type) {
  const params = { username: getToken().username, type: type }
  return request({
    url: servers.url + `/sub_unit_with_users`,
    method: 'get',
    params: params
  })
}
export function getExecutorUserByEnforcementTypeStepIdAndUnitId(enforcementTypeStepId, unitId) {
  const params = { enforcementTypeStepId, unitId }
  return request({
    url: servers.url + `/user/step_executor_user`,
    method: 'get',
    params: params
  })
}

export function getEnforcementTypeExecutorUserByEnforcementTypeIdAndUnitId(enforcementTypeId, unitId) {
  const params = { enforcementTypeId, unitId }
  return request({
    url: servers.url + `/user/enforcement_type_executor_user`,
    method: 'get',
    params: params
  })
}

