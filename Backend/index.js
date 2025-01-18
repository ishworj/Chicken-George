import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser';

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/ChickenStore-DB').then(()=>{console.log("the george")})

const product = mongoose.Schema({
    name: String,
    desctiption: String,
    calorie: String,
    price: String,
    category: String
})

const suscribers = mongoose.Schema({
    email:String
    })

const suscribersModel = mongoose.model('suscribers',suscribers)

const productModel = mongoose.model('products',product)
app.get("/api/v1/products",async (req,res)=>{
    const items = await productModel.find({});
    const categorizedData = items.reduce((acc, item) => {
        const category = item.category;
        if (!acc[category]) {
          acc[category] = [];
        }
        acc[category].push(item);
        return acc;
      }, {});
    res.status(200).send(categorizedData);
})



app.post("/api/v1/suscribers",async (req,res) => {
    const emailIdCreated = await new suscribersModel(req.body).save()
    console.log(emailIdCreated);
})
app.listen(8080,()=>{
    console.log("Server started at port 8080");
})



