//NOTE here is, application startup and server processors

const express =require('express'),
cors = require('cors'); 
const router = require('./rootes/customerRouter');
const orderRouter = require('./rootes/orderRouter');
const deliveryRouter = require('./rootes/deliveryRouter');
const app = express();
const foodRouter = require('./rootes/foodRouter');
const categoriesRouter = require('./rootes/categoriesRouter');
const userRouter = require('./rootes/userRoutes');
const paymentRouter=require('./rootes/paymentsRouter');
const reviewRouter=require('./rootes/reviewRouter');

const parser = require('body-parser');
// const { readPayments } = require('./controllers/payments');


app.use(cors())
app.use(express.json())

app.use(parser.json())

app.use('/foods', foodRouter)

app.use('/categories', categoriesRouter)
app.use("/",deliveryRouter)


app.use("/customers",router)

app.use("/orders",orderRouter)
app.use("/users",userRouter)
app.use("/payments",paymentRouter);
app.use("/review",reviewRouter);



// listen port url -> http://localhost:4200/
const PORT= 4200
app.listen(PORT, function(){
    console.log(`Server is running on http://localhost:${PORT}/`);
})

