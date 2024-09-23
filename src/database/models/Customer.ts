import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CustomerSchema = new Schema(
  {
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
  },
  {
    timestamps: true,
    toJSON: {
      transform(doc, ret) {
        delete ret.password;
        delete ret.salt;
        delete ret.__v;
      },
    },
  }
);

export default mongoose.model("customer", CustomerSchema);
