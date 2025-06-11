import mongoose from "mongoose";

const CoffeeSchema = new mongoose.Schema({
    name: String,
    roastLevel: Number,
    price: Number,
});

export default mongoose.models.Coffee || mongoose.model("Coffee", CoffeeSchema);
