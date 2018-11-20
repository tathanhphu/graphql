import * as k from 'knex';

declare global {
  namespace NodeJS {
    interface Global {
      knex: k;
    }
  }

  const knex: NodeJS.Global['knex'];
  
}