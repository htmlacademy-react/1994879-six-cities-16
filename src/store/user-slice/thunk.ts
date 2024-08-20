import { createAsyncThunk } from '@reduxjs/toolkit';
import { Endpoint } from '../../const';
import { ExtraAxios } from '../type';
import { LoggedUser, LoginEntity } from '../../types/user';
import { HttpStatusCode } from 'axios';
import { fetchFavorites } from '../favorite-slice/thunk';
import { dropToken, saveToken } from '../../services/token';

export const checkLogin = createAsyncThunk<LoggedUser, undefined, ExtraAxios>(
  'user/checkLogin',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<LoggedUser>(Endpoint.Login);
    dispatch(fetchFavorites());
    return data;
  }
);

export const login = createAsyncThunk<LoggedUser, LoginEntity, ExtraAxios>(
  'user/login',
  async (loginEntity, { dispatch, extra: api }) => {
    dropToken();
    const { data } = await api.post<LoggedUser>(Endpoint.Login, loginEntity);
    saveToken(data.token);
    dispatch(fetchFavorites());
    return data;
  }
);

export const logout = createAsyncThunk<boolean, undefined, ExtraAxios>(
  'user/logout',
  async (_arg, { extra: api }) => {
    const { status } = await api.delete(Endpoint.Logout);
    dropToken();
    return status === Number(HttpStatusCode.NoContent);
  }
);
