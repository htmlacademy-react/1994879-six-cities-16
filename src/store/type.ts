import { AxiosInstance } from 'axios';

export type StateLoading<T> = {
  value: T | undefined;
  loading: boolean;
}

export type AsyncThunkPropWithAxios = {
  extra: AxiosInstance;
}
