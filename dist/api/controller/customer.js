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
const repositories_1 = require("../../database/repositories");
class CustomerController {
    constructor() {
        this.customer = new repositories_1.CustomerRepository();
        this.postCustomer = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const body = req.body;
                const result = yield this.customer.CreateCustomer(body);
                res.json(result);
            }
            catch (err) {
                next(err);
            }
        });
        this.getCustomers = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.customer.getCustomers();
                res.json(result);
            }
            catch (err) {
                next(err);
            }
        });
        this.getCustomer = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const result = yield this.customer.getCustomer(id);
                res.json(result);
            }
            catch (err) {
                next(err);
            }
        });
    }
}
exports.default = CustomerController;
