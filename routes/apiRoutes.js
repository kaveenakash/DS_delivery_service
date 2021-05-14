const express = require('express');
const router = express.Router();

//import Controllers




//APIs 
router.get("/delivery-details", (request,response) => {
    return response.json({
        name:"Lumini",
        address:"Avissawella"
    })
})

router.get("/product-details", (request,response) => {
    return response.json({
        message:"You got product details"
    })
})

module.exports=router;