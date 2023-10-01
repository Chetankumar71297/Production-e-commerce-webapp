import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(mongodb+srv://chetankumar71297:*****@cluster0.sl2iysr.mongodb.net/);
    console.log(`Connected To Mongodb Database ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error in Mongodb ${error}`);
  }
};

export default connectDB;
