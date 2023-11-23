const path = require('path');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoConnect=require('./util/database').mongoConnect;

const cors = require('cors');
app.use(cors());

app.use(bodyParser.json({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const userRoutes=require('./routes/user');

app.use(userRoutes);



app.use((req, res) => {
  console.log('url', req.url);
  //res.sendFile(path.join(__dirname, `public/${req.url}`));
});

mongoConnect(()=>{
   
   app.listen(3000);
})
