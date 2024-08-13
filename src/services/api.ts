import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
import { toast } from 'react-toastify';
import { getToken } from './token';
import { axiosCreateConfig, errorStatusCodes, HEADER_TOKEN } from './const';

type DetailMessageType = {
  type: string;
  message: string;
};

export const createAPI = (): AxiosInstance => {
  const api = axios.create(axiosCreateConfig);

  api.interceptors.request.use((config) => {
    const token = getToken();
    if (token && config.headers) {
      config.headers[HEADER_TOKEN] = token;
    }
    return config;
  });

  const shouldDisplayError = (response: AxiosResponse) => errorStatusCodes.includes(response.status);

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<DetailMessageType>) => {
      if (error.response && shouldDisplayError(error.response)) {
        const detailMessage = error.response.data;
        toast.warn(detailMessage.message);
      } else {
        throw error;
      }
    }
  );

  return api;
};
