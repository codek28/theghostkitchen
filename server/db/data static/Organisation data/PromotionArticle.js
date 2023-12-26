const mongoose = require("mongoose");

// Event like Donation drive/ Sports Events/ Food Events/ Cultural Events could provide a post on service of ghost kitchen

const PromotionArticleSchema = new mongoose.Schema({
  DocumentAuthor: {type:String, required:true, unique:true}, // Admin ID
  EventID: {type:String}, // Event ID
  EventHeading:{type:String},
  EventPara:{type:String},
  EventVisuals : {}
});

module.exports = mongoose.model("PromotionArticle", PromotionArticleSchema);