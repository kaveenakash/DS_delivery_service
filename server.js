const express = require('express');
const cors = require('cors');

const app=express();

app.use(express.json());
app.use(cors());

const apiRoutes=require("./routes/apiRoutes");
app.use(apiRoutes);

app.listen(8001,()=> {
    console.log('Server started '+8001);
})