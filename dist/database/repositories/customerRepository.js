"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_errors_1 = require("../../utils/app-errors");
const models_1 = require("../models");
class CustomerRepository {
    CreateCustomer({ email, password, phone, salt }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const customer = new models_1.CustomerModel({
                    email,
                    password,
                    phone,
                    salt,
                    address: [],
                });
                const result = yield customer.save();
                return result;
            }
            catch (err) {
                throw new app_errors_1.APIError("API Error", app_errors_1.STATUS_CODES.INTERNAL_ERROR, "Unable to Create Customer");
            }
        });
    }
    getCustomers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const customers = yield models_1.CustomerModel.find({});
                return customers;
            }
            catch (err) {
                throw new app_errors_1.APIError("API Error", app_errors_1.STATUS_CODES.INTERNAL_ERROR, "Unable to fetch customer list");
            }
        });
    }
    getCustomer(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const customer = yield models_1.CustomerModel.findOne({
                    _id: id,
                });
                if (!customer) {
                    throw new Error("No customer associated with give Id");
                }
                return customer;
            }
            catch (err) {
                throw new app_errors_1.APIError("API Error", app_errors_1.STATUS_CODES.INTERNAL_ERROR, "Unable to fetch customer");
            }
        });
    }
}
exports.default = CustomerRepository;
