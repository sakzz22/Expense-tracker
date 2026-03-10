import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://sakshamwork2222_db_user:sak123@cluster0.hq7rr97.mongodb.net/",
    );
    console.log("DB Connected");
  } catch (error) {
    console.log("DB ERROR");
    process.exit(1);
  }
};
