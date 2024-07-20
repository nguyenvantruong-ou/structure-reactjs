/* eslint-disable no-underscore-dangle */

import { Language } from "../constants/language";


/* eslint-disable no-nested-ternary */
type PreloadConfig = Record<string, unknown> | undefined;
export type Locale = 'en';

export type Slug = {
  [key in Locale]: string;
};

interface Config {
  baseApiUrl: string;
  baseWsUrl: string;
  googleClientId: string;
  facebookClientId: string;
  languages: Locale[];
  defaultLanguage: Language;
  // Add other properties as needed
}
declare const global: typeof globalThis & {
  __CONFIG__?: PreloadConfig;
};
const isServer = typeof window === 'undefined';

const preloadConfig: PreloadConfig = isServer
  ? undefined
  : typeof global !== 'undefined' && global.__CONFIG__ !== undefined
    ? global.__CONFIG__
    : undefined;

const config: Config = {
  baseApiUrl: import.meta.env.VITE_PUBLIC_BASE_API_URL || '',
  baseWsUrl: import.meta.env.VITE_PUBLIC_BASE_WEBSOCKET_URL || '',
  googleClientId: import.meta.env.VITE_PUBLIC_GOOGLE_CLIENT_ID || '',
  facebookClientId: import.meta.env.VITE_PUBLIC_FACEBOOK_CLIENT_ID || '',
  languages: ['en'],
  defaultLanguage: Language.EN,
  ...preloadConfig
};

export default config;
