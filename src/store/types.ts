import { ILoginState } from './login/types'

export interface IRootState {
  root: boolean
}

export interface IRootWithModule {
  login: ILoginState
}

export type IStoreType = IRootState & IRootWithModule
