const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  items: [
    {
      menuItemId: { type: mongoose.Schema.Types.ObjectId, ref: "MenuItem" },
      quantity: { type: Number, required: true },
    },
  ],
  status: {
    type: String,
    enum: ["Em preparação", "Pronto", "Entregue"],
    default: "Em preparação",
  },
  totalPrice: { type: Number, required: true },
});

module.exports = mongoose.model("Order", orderSchema);
