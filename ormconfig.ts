export default {
  type: "mysql",
  host: "localhost",
  username: "root",
  password: "",
  database: "nlw",
  entities: ["src/entities/*.ts"],
  migrations: ["src/db/migrations/*.ts"],
  cli: {
    migrationsDir: "src/db/migrations",
    entitiesDir: "src/entities",
  },
};
