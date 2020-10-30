const express = require ('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const cors = require("cors");

const HttpError = require('./models/http-error')
const reviewsRoutes = require('./routes/reviews-routes');


const app = express();

app.use(bodyParser.urlencoded({
    extended: true
 }));

app.use(bodyParser.json());

app.use(cors());
app.options("*", cors());


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  
    next();
  });


app.use("/api/reviews", reviewsRoutes);


app.use((req, res, next) => {
    const error = new HttpError('Could not find this route.', 404);
    throw error
})


app.use((error, req, res, next) =>{
    if (res.headerSent){
        return next(error);
    }
    res.status(error.code || 500);
    res.json({message: error.message || 'An unknown error ocurred'})
}

)


mongoose
  .connect(
       `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.x3qb1.gcp.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => {
    app.listen(process.env.PORT || 5000);
  })
  .catch((err) => {
    console.log(err);
  });
