import { AxiosInstance } from 'axios';

export type StateLoading<T> = {
  entity: T | undefined;
  loading: boolean;
}

export type ExtraAxios = {
  extra: AxiosInstance;
}
