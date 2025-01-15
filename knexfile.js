export default {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './database.sqlite', // Caminho para o banco
    },
    useNullAsDefault: true,
    migrations: {
      directory: './src/migrations',
    },
    seeds: {
      directory: './src/seeds',
    },
  },
};