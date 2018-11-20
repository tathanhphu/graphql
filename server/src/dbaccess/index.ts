import * as k from 'knex';

export async function connect(url: string) {
  await disconnect();

  return global.knex = k({
    client: 'pg',
    connection: 'postgresql://postgres:postgres@test:5432/graphql'
  });
}

export async function disconnect() {
  if (global.knex) {
    await knex.destroy();
    delete global.knex;
  }
}
