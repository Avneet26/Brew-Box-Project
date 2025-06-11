import mongoose from 'mongoose';

// Define the schema for the CoffeeCart collection
const CoffeeCartSchema = new mongoose.Schema({
  name: { type: String, required: true },       // Customer's name
  item: { type: String, required: true },       // Coffee item name
  id: { type: String, required: true },         // Item ID
  quantity: { type: Number, required: true },   // Quantity ordered
  price: { type: Number, required: true },      // Price per unit
  total: { type: Number, required: true }       // Total price = quantity * price
}, {
  timestamps: true // Automatically adds createdAt and updatedAt fields
});

// Export the model or reuse existing one if already defined
export default mongoose.models.coffeeCart || mongoose.model('coffeeCart', CoffeeCartSchema);
