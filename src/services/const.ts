import { CreateAxiosDefaults } from 'axios';
import { StatusCodes } from 'http-status-codes';

export const HEADER_TOKEN = 'x-token';

export const axiosCreateConfig: CreateAxiosDefaults = {
  baseURL: 'https://16.design.htmlacademy.pro/six-cities',
  timeout: 5000,
};

export const errorStatusCodes = [
  StatusCodes.BAD_REQUEST,
  StatusCodes.UNAUTHORIZED,
  StatusCodes.NOT_FOUND,
  StatusCodes.CONFLICT,
];
