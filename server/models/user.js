const mongoose = require("mongoose");
const bcrypt = require("bcrypt");


const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      maxLength: 32,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default: "",
      trim: true,
    },
  },
  { timestamps: true }
);




userSchema.methods.matchPassword = {

  matchPassword :async function(password){
    return  await bcrypt.compare(password, this.password)
  } 
  
};

userSchema.pre('save',async function(next){
  
  if (!this.password) {  
    return ""
  }
  
  if(!this.isModified('password')){
    next();
  }

  try {
    const salt = await bcrypt.genSalt(10);
    this.password=  await bcrypt.hash(this.password, salt);

  } catch (err) {
    return "";
  }
  next();
})

module.exports = mongoose.model("User", userSchema);
