import * as userServices from './user.resolver';

import { LoginInfo, Root} from '../../models';

export let resolvers = {
  Query: {
    login: (root: Root, { input }: { input: LoginInfo }) => userServices.login(input)
  }
}