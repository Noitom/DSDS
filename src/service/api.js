import http from '@/config/axios_conf'
import { apiBaseUrl } from '@/config'

/* 登录 */
export const login = async ({username, password}) => {
  let result = await http.post(`${apiBaseUrl}/login`, {
    username,
    password
  })
  return result
}

/* 测试 */
export const test1 = async () => {
  let result = await http.get(`${apiBaseUrl}/test/1000/test1 Text`)
  return result
}
