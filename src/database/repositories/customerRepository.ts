import { CreateCustomer } from "../../types";
import {
  APIError,
  AppError,
  BadRequestError,
  STATUS_CODES,
} from "../../utils/app-errors";
import { CustomerModel } from "../models";

class CustomerRepository {
  async CreateCustomer({ email, password, phone, salt }: CreateCustomer) {
    try {
      const customer = new CustomerModel({
        email,
        password,
        phone,
        salt,
        address: [],
      });
      const result = await customer.save();
      return result;
    } catch (err) {
      throw new APIError(
        "API Error",
        STATUS_CODES.INTERNAL_ERROR,
        "Unable to Create Customer"
      );
    }
  }

  async getCustomers() {
    try {
      const customers = await CustomerModel.find({});
      return customers;
    } catch (err) {
      throw new APIError(
        "API Error",
        STATUS_CODES.INTERNAL_ERROR,
        "Unable to fetch customer list"
      );
    }
  }

  async getCustomer(id: string) {
    try {
      const customer = await CustomerModel.findOne({
        _id: id,
      });
      if (!customer) {
        throw new Error("No customer associated with give Id");
      }
      return customer;
    } catch (err) {
      throw new APIError(
        "API Error",
        STATUS_CODES.INTERNAL_ERROR,
        "Unable to fetch customer"
      );
    }
  }
}

export default CustomerRepository;
