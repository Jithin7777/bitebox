const mongoose=require('mongoose')
// const connectionString=process.env.database
const connectionString=process.env.DATABASE

mongoose.connect(connectionString).then(()=>{
    console.log('MongoDB Atlas Connected');
}).catch((error)=>{
console.log(`MongoDB Connection Failed${error}`);
});