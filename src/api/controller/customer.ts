import { CustomerRepository } from "../../database/repositories";
import { RequestHandler } from "express";
import { CreateCustomer } from "../../types";
class CustomerController {
  private customer = new CustomerRepository();

  postCustomer: RequestHandler = async (req, res, next) => {
    try {
      const body = req.body as CreateCustomer;
      const result = await this.customer.CreateCustomer(body);
      res.json(result);
    } catch (err) {
      next(err);
    }
  };
}

export default CustomerController;
