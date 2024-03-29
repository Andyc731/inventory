const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: { type: String, required: true },
  category: [{ type: Schema.Types.ObjectId, ref: "Category" }],
});

ItemSchema.virtual("url").get(function () {
  return `/catalog/items/${this.id}`;
});

module.exports = mongoose.model("Item", ItemSchema);
