export type LoginInfo = {
  [K in 'userName' | 'password']: string;
};

export type UserInfo = {
  [K in 'userName' | 'accessToken']: string;
};