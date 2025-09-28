const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;

// const mongoose = require("mongoose")

// async function connectDB(){
//     try{
//         await mongoose.connect(process.env.MONGODB_URI)
//         console.log("Mongodb conne")
//     }catch(err){
//         console.log(err)
//     }
// }

// module.exports = connectDB
