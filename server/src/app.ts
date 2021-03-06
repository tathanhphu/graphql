import * as express from 'express';

import { ApolloServer } from 'apollo-server-express';
import { resolve } from 'path';
import { readFileSync } from 'fs';
import * as bodyParser from 'body-parser';
import { LoginInfo } from './models/user';
import * as userService  from './graphql/resolvers/user.resolver';
export type Root = undefined;
export const rootValue: Root = undefined;

let app = express();

// app.use('/', (req: any, res: any, next: any) => {
//   res.send('Hello 123');
//   next();
// });

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

const typeDefs = readFileSync(resolve(__dirname, 'graphql', 'schema.gql'), { encoding: 'utf8' });

const resolvers = {
  Query: {
    login: (root: Root, { input }: { input: LoginInfo }) => userService.login(input)
  }
}

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app });

const port = 8081;
app.listen(port, () => {
  console.log(`Server ready at http://localhost:${port}${server.graphqlPath}`);
});