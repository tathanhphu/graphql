import { LoginInfo, UserInfo } from "../../models/user";

export async function login(input: LoginInfo): Promise<UserInfo | undefined> {
  if ('phu' === input.userName) {
    return {
      accessToken: 'token1',
      userName: input.userName
    }
  }
  return undefined;
}