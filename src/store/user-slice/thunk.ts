import { createAsyncThunk } from '@reduxjs/toolkit';
import { Endpoint } from '../../const';
import { ExtraAxios } from '../type';
import { LoggedUser, LoginEntity } from '../../types/user';
import { HttpStatusCode } from 'axios';


export const checkLogin = createAsyncThunk<LoggedUser, undefined, ExtraAxios>(
  'user/checkLogin',
  async (_arg, { extra: api }) => {
    const response = await api.get<LoggedUser>(Endpoint.Login);
    return response.data;
  }
);

export const login = createAsyncThunk<LoggedUser, LoginEntity, ExtraAxios>(
  'user/login',
  async (data, { extra: api }) => {
    const response = await api.post<LoggedUser>(Endpoint.Login, data);
    return response.data;
  }
);

export const logout = createAsyncThunk<boolean, undefined, ExtraAxios>(
  'user/logout',
  async (_arg, { extra: api }) => {
    const response = await api.delete(Endpoint.Logout);
    return response.status === HttpStatusCode.NoContent as number;
  }
);
