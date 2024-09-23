"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const CustomerSchema = new Schema({
    email: String,
    password: String,
    salt: String,
    phone: String,
    address: [{ type: Schema.ObjectId, ref: "address", require: true }],
    cart: [
        {
            type: Schema.ObjectId,
            ref: "product",
            require: true,
        },
        { unit: Number, require: true },
    ],
    wishlist: [
        {
            type: Schema.Types.ObjectId,
            ref: "product",
            require: true,
        },
    ],
    orders: [
        {
            type: Schema.ObjectId,
            ref: "order",
            require: true,
        },
    ],
}, {
    timestamps: true,
    toJSON: {
        transform(doc, ret) {
            delete ret.password;
            delete ret.salt;
            delete ret.__v;
        },
    },
});
exports.default = mongoose_1.default.model("customer", CustomerSchema);
