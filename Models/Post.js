let mongoose = require("mongoose");

//Create a person having this prototype:
let postSchema = new mongoose.Schema({
  title:String,
  message:String,
  creator:String,
  tags:[String],

  selectFile:String,
  likeCount:{
      type:Number ,
      default:0
  },
  createdAt:{
    type:Date,
    defaulte:new Date(),
  },
});

module.exports = post = mongoose.model("post", postSchema);