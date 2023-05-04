const mongoose = require("mongoose");
const bidschema = new mongoose.Schema({
  userId: {
    type: String,
    // required: true,
  },
  bidPrice: {
    type: String,
    // required: true,
  },
});
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
  // guest_list: [
  //   {
  //     type: mongoose.Types.ObjectId,
  //     ref: "Registers",
  //     required: true,
  //   },
  // ],
  // guest_list: ({
  //   data: [bidschema]
  // }),
  guest_list: [bidschema],
  user: {
    type: mongoose.Types.ObjectId,
    ref: "Register",
    required: true,
  },
});
module.exports = mongoose.model("products", productSchema);
