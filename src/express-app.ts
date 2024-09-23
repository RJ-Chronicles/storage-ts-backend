import express from "express";
import { Express } from "express";
import cors from "cors";

import { CustomerRouter } from "./api";
import HandleErrors from "./utils/error-handler";
export default async (app: Express) => {
  app.use(express.json({ limit: "1mb" }));
  app.use(express.urlencoded({ extended: true, limit: "1mb" }));
  app.use(cors());
  app.use(express.static(__dirname + "/public"));

  const customerRout = await CustomerRouter();
  app.use("/v1/customer", customerRout);
  // customer(app);

  app.use(HandleErrors);
};
