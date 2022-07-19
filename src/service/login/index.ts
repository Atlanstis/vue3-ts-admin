import request from '../index'

import { IDataType } from '../types'
import { IAccount, ILoginResult } from './types'

export function accountLoginRequest(account: IAccount) {
  return request.post<IDataType<ILoginResult>>({
    url: '/login',
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return request.get<IDataType>({
    url: `/users/${id}`
  })
}

export function requestUserMenusByRoleId(id: number) {
  return request.get<IDataType>({
    url: `/role/${id}/menu`
  })
}
