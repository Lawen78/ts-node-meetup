type daticonfig = {
  url: string,
  dialect: string,
  operatorsAliases: boolean
}

export const conf: {
  development: daticonfig,
  web: daticonfig,
  production: daticonfig,
  [index:string]: daticonfig
} = {
    "development": {
      "url": "postgres://postgres:postgres@localhost:5432/ts-node",
      "dialect": "postgres",
      "operatorsAliases": false
    },
    "web": {
      "url": "postgres://vaahsepd:Ed2jkFCQaV7skB4If-FGKw9Pj0ZQOxbJ@horton.elephantsql.com:5432/vaahsepd",
      "dialect": "postgres",
      "operatorsAliases": false
    },
    "production": {
      "url": "",
      "dialect": "postgres",
      "operatorsAliases": false
    }
  }