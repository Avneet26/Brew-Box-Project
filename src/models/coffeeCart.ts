import mongoose, { Document, Model, Schema } from 'mongoose';

export interface ICoffeeCart extends Document {
  imgsrc: string;
  name: string;
  roastLevel: number;
  price: number;
  quantity: number;
}

const CoffeeCartSchema = new Schema({
  imgsrc: { type: String, required: true },
  name:    { type: String, required: true },
  roastLevel: { type: Number, required: true },
  price:   { type: Number, required: true },
  quantity:{ type: Number, required: true, min: 1 },
});

const CoffeeCart: Model<ICoffeeCart> =
  mongoose.models.CoffeeCart ||
  mongoose.model<ICoffeeCart>('CoffeeCart', CoffeeCartSchema);

export default CoffeeCart;
