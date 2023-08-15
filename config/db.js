import { set, connect as _connect } from "mongoose";

const connectDB = async () => {
  const { MONGO_URI } = process.env;
  try {
    set("strictQuery", false);
    const connect = await _connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`Mongo DB Connected: ${connect.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

export default connectDB;
