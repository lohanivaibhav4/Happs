import mongoose from "mongoose";

export default function ConnectDB(MONGO_URI){
    mongoose
    .connect(MONGO_URI)
    .then(()=>{
        console.log("Database Connected!")
    })
    .catch((err)=>{
        console.log("Error Connecting To Database!", err)
    })
}