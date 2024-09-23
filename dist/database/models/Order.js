"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const OrderSchema = new Schema({
    orderId: String,
    customerId: String,
    amount: Number,
    status: String,
    txnId: String,
    items: [
        { type: Schema.ObjectId, ref: "product", require: true },
        { unit: Number, require: true },
    ],
}, {
    timestamps: true,
    toJSON: {
        transform(doc, ret) {
            delete ret.__v;
        },
    },
});
exports.default = mongoose_1.default.model("order", OrderSchema);
