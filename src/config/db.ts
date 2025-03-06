import mongoose from "mongoose";

export const connectDB = async() => {

    try {
        
        const connection = await mongoose.connect(process.env.MONGOURI)
        

    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }




}