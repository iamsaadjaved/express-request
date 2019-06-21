const mongoose = require("mongoose");
const validator = require("validator");
// const bcryptjs = require("bcryptjs")

// const profileSchema = new mongoose.Schema();


// profileSchema.pre('save' , async function(next) {
//   const profile = this;

//   console.log(profile.password, "pre password");

//   profile.password = await bcryptjs.hash(profile.password, 8)

//   console.log(profile.password, "hashed password")

//   next();

// });


const Profiles = mongoose.model("Profiles", {
  name: {
    type: String
  },

  // age: {
  //   type: Number,
  //   min:0,
  //   validate(value) {
  //     if (value <= 18) {
  //       throw new Error("Age must be 18");
  //     }
  //   }
  // },

  // graduate: {
  //   type: Boolean,
  //   default: false
  // },

  // email: {
  //   type: String,
  //   validate(value) {
  //     if (!validator.isEmail(value)) {
  //       throw new Error("Excepted correct email");
  //     }
  //   }
  // },

  // password: {
  //   type: String,
    
  //   minLenght: 6,
  //   trim: true
  //   // validate(value) {
  //   //   if (value.toLowerCase().includes("password")) {
  //   //     throw Error("password cannot contain password");
  //   // //   }
  //   // }
  // }
} );


module.exports = Profiles;
