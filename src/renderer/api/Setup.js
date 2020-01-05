import {servers} from './config'
import request from '@/utils/request'
import { getToken } from '../utils/auth'


// 获取许可信息
export function getLicenseData() {
  return request({
    url: servers.url + '/license',
    method: 'get'
  })
}


// 获取版本信息
export function getVersionData() {
  return request({
    url: servers.url + '/version',
    method: 'get'
  })
}


// 获取安装环境信息
export function getEnvironmentCheckData() {
  return request({
    url: servers.url + '/environment',
    method: 'get'
  })
}



// 获取组件信息
export function getComponentData() {
  return request({
    url: servers.url + '/component',
    method: 'get'
  })
}


// 根据版本号 获取升级组件信息
export function getComponentDataByVersion(version) {
  return request({
    url: servers.url + `/upgrade/list/${version}`,
    method: 'get'
  })
}


// 获取配置信息
export function getConfigPropertyData() {
  return request({
    url: servers.url + '/property',
    method: 'get'
  })
}


// 更新配置信息
export function updateConfigPropertyData(data) {
  return request({
    url: servers.url + '/property/update',
    method: 'put',
    data: data
  })
}

// 检测服务器连通性
export function validateNetworkStatus(ip,port) {
  let serverInfo = {ip: ip,port: port};
  return request({
    url: servers.url + '/validate/network',
    method: 'get',
    params: serverInfo
  })
}

// 检测数据库连通性
export function validateDatabaseStatus(ip,port,username,password) {
  let serverInfo = {ip: ip,port: port,username: username,pwd: password};
  return request({
    url: servers.url + '/validate/database',
    method: 'get',
    params: serverInfo
  })
}


// 执行指定文件
export function executeSpecifyFile(fileName) {
  let fileInfo = {filename: fileName};
  return request({
    url: servers.url + '/install/execfile',
    method: 'get',
    params: fileInfo
  })
}


// 升级时 执行指定文件
export function executeSpecifyFileInUpgrade(version,fileName) {
  let fileInfo = {filename: fileName};
  return request({
    url: servers.url + `/upgrade/execfile/${version}`,
    method: 'get',
    params: fileInfo
  })
}


// 安装 command: install 、卸载 command: uninstall
// 启动 command: start、   停止 command: stop
export function installComponent(componentName,command) {
  let installInfo = {command: command};
  return request({
    url: servers.url + `/install/component/${componentName}`,
    method: 'get',
    params: installInfo
  })
}


// 安装 command: install 、卸载 command: uninstall
// 启动 command: start、   停止 command: stop
// 调用 这个方法是因为后台有一个复制文件到正式环境目录的动作

export function upgradeComponent(version,componentName,command) {
  let upgradeInfo = {command: command};
  return request({
    url: servers.url + `/upgrade/exec/${version}/${componentName}`,
    method: 'get',
    params: upgradeInfo
  })
}



// 升级完成
export function upgradeComplete(version) {
  return request({
    url: servers.url + `/upgrade/complete/${version}`,
    method: 'get'
  })
}




// 首页上 查询服务运行状态
export function serviceRunningStatus(component) {
  return request({
    url: servers.url + `/home/stats/${component}`,
    method: 'get'
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

