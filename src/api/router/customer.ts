import { Router } from "express";
import { CustomerController } from "../controller";
export default async () => {
  const router = Router();
  const customer = new CustomerController();

  router.post("/signup", customer.postCustomer);
  router.get("/list", customer.getCustomers);
  router.get("/one/:id", customer.getCustomer);

  return router;
};
