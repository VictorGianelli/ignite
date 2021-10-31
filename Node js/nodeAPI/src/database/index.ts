import { createConnection, getConnectionOptions } from "typeorm";

console.log("Database");
interface IOptions {
  host: string;
}

getConnectionOptions().then((options) => {
  const newOptions = options as IOptions;
  newOptions.host = "database";
  createConnection({
    ...options,
  });
});
