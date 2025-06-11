import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  item: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  }
});

export default mongoose.models.Order || mongoose.model('Order', OrderSchema);
