const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  // title: {
  //   type: String,
  //   required: true,
  // },
  // description: {
  //   type: String,
  //   required: true,
  // },
  // image: {
  //   type: String,
  //   required: true,
  // },
  street: {
    type: "string",
  },
  car_number: {
    type: "string",
  },
  contact: {
    type: "string",
  },
  city: {
    type: "string",
  },
  postal_code: {
    type: "string",
  },
  description: {
    type: "string",
  },
  price: {
    type: "string",
  },
  amenities: {
    type: "array",
    items: {},
  },
  time: {
    type: "string",
  },
  date: {
    type: "string",
  },
  guests: {
    type: "string",
  },
  pickup: {
    type: "string",
  },
  drop: {
    type: "string",
  },
  close: {
    type: "string",
    default: "open",
  },
  guest_list: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Registers",
      required: true,
    },
  ],
  user: {
    type: mongoose.Types.ObjectId,
    ref: "Register",
    required: true,
  },
});
module.exports = mongoose.model("products", productSchema);
