require('dotenv').config();
const http = require('http');
const express = require('express');
const dbConnect = require('./db/dbConnect');
const routes = require('./routes');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const app = express();

//cookies
app.use(cookieParser());

//cors
app.use(
  cors({
    origin: '*',
  })
);

app.set('view engine', 'ejs');

//body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use('/v1', routes);

app.get('/', (req, res) => {
  res.render('index');
});

//database connection
dbConnect();

//server
http.createServer(app).listen(process.env.PORT, () => {
  console.log(`server started on ${process.env.PORT}`);
});
