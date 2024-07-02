// import mongoose from "mongoose";
// const mongoose=require("mongoose");
// const colors=requrie("colors")
// const connectDB=async()=>{
//     try{
//         await mongoose.connect(process.env.MONGO_URI)
//     console.log(`Database Connected ${mongoose.connection.host}`.bgMagenta.white);
//     }
//     catch(error){
//         console.log(`DB error ${error}`.bgRed.white);
//     }


// };
// module.exports=connectDB;
import mongoose from "mongoose";

export default async function connect(){
    mongoose.connect(process.env.MONGO_URI,{useCreateIndex: true, useNewUrlParser: true,useUnifiedTopology: true, useFindAndModify: false})
    .then(()=>console.log('Mongodb connected'))
    .catch(err=>console.log(err))
    //await mongoose.connect(process.env.ATLAS_URI)
    
}