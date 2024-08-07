import { AxiosInstance } from 'axios';

export type FetchStatus = 'none' | 'loading' | 'done' | 'error';

export type FetchState<T> = {
  entity: T | undefined;
  status: FetchStatus;
}

export type ExtraAxios = {
  extra: AxiosInstance;
}
