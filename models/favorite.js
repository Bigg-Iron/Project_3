const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
  launchId: { type: String, required: true },
  userId: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Favorite = mongoose.model("Favorite", favoriteSchema);

module.exports = Favorite;

