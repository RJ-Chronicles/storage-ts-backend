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

  getCustomers: RequestHandler = async (req, res, next) => {
    try {
      const result = await this.customer.getCustomers();
      res.json(result);
    } catch (err) {
      next(err);
    }
  };

  getCustomer: RequestHandler = async (req, res, next) => {
    try {
      const { id } = req.params as { id: string };
      const result = await this.customer.getCustomer(id);
      res.json(result);
    } catch (err) {
      next(err);
    }
  };
}

export default CustomerController;
