import mongoose from "mongoose";

export default async () => {
  console.log("url: ", process.env.DB_URL);
  const DB_URL =
    "mongodb+srv://admin:siDaOF4kJ6W6ivqt@project-free-cluster.eb0vzyb.mongodb.net/house-product?retryWrites=true&w=majority";
  console.log("inside the DB connect");
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(DB_URL, {
      autoIndex: true,
    });
    console.log("Db Connected");
  } catch (error) {
    console.log("=========Error ============");
    console.log(error);
    process.exit(1);
  }
};
