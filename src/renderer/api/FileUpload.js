import {servers} from './config'
import request from '@/utils/request'

console.log(servers)
// 获取许可信息
export function combineChunksAfterUploadSuccess(taskId,filename) {
  let param ={task_id: taskId,filename: filename}
  return request({
    url: servers.fileServerApi + '/upgrade/upload/success',
    method: 'get',
    params: param
  })
}
