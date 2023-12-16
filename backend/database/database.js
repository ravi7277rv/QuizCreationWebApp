import mongoose from "mongoose";
import { config } from "dotenv";
config();

const ConnectDatabase = () => {
    mongoose.connect(process.env.MONGO_URL)
        .then((conn) => {
            console.log(`Database is connected ${conn.connection.host}`);
        })
        .catch((error) => {
            console.log(error);
        })
}

export default ConnectDatabase;




































