import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://GreatStack:Tension27%40@cluster0.k17rwhw.mongodb.net/food-del').then(()=>console.log('DB Connected'));
}
