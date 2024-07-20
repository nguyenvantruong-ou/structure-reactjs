import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import config from '../../commons/config';
import { RootState } from '../store';

export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE'
}

const baseQuery = fetchBaseQuery({
  baseUrl: config.baseApiUrl,
  credentials: 'same-origin',
  prepareHeaders: (headers, { getState }) => {
    const state = getState() as RootState;
    const accessToken = state.auth.token;
    if (accessToken) {
      headers.set('Authorization', `Bearer ${accessToken}`);
    }
    return headers;
  }
});

export const baseApi = createApi({
  baseQuery,
  endpoints: () => ({})
});
