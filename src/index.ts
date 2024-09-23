import express from "express";
import { connection } from "./database";
import expressApp from "./express-app";
const StartServer = async () => {
  const app = express();
  await connection();
  await expressApp(app);
  const port = process.env.PORT || 4002;

  app
    .listen(port, () => console.log(`App is running on port: : ${port}`))
    .on("error", (err) => {
      console.log(err);
      process.exit(1);
    });
};

StartServer();
