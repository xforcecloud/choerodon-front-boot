export const ACCESS_TOKEN = 'access_token';
export const TOKEN_TYPE = 'token_type';
export const ACCESS_DOMAIN = 'domain';
export const AUTH_HOST = `${process.env.AUTH_HOST}`;
export const CLIENT_ID = `${process.env.CLIENT_ID}`;
export const AUTH_URL = `${AUTH_HOST}/oauth/authorize?response_type=token&client_id=${CLIENT_ID}&state=`;
export const LOCAL = JSON.parse(process.env.LOCAL || 'true');
export const COOKIE_SERVER = `${process.env.COOKIE_SERVER}`;
export const FILE_SERVER = `${process.env.FILE_SERVER}`;
export const HEADER_TITLE_NAME = `${process.env.HEADER_TITLE_NAME || 'XforceCloud'}`;
export const USE_DASHBOARD = JSON.parse(process.env.USE_DASHBOARD || 'false');
