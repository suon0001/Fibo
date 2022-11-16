const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let dealSchema = new Schema({
  test: { type: Number },
  amount: { type: Number },
  closedate: { type: String },
  dealname: { type: String},
  dealstage: { type: String },
  hubspot_owner_id: { type: Number },
  pipeline: { type: Boolean },
});

module.exports = mongoose.model("Deals", dealSchema);
