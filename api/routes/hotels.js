import express from "express";
import Hotel from "../models/Hotel.js";

const router = express.Router();

//create
router.post("/", async (req,res)=>{
    const newHotel = new Hotel(req.body)

    try {
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    } catch (error) {
        res.status(500).json(err)
    }
})

 //update
 router.put("/:id", async (req,res)=>{
    
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id,{$set: req.body},{new: true})
        res.status(200).json(updatedHotel)
    } catch (error) {
        res.status(500).json(err)
    }
})

// //Delete
router.delete("/:id", async (req,res)=>{
    
    try {
        const Hotel = await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("Hotel has been deleted")
    } catch (error) {
        res.status(500).json(err)
    }
})

//Get
router.get("/:id", async (req,res)=>{
    
    try {
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel)
    } catch (error) {
        res.status(500).json(err)
    }
})

//Get all
// router.get("/", async (req,res,next)=>{
    
//     // console.log("this is hotel route")
//     try {
//         const hotels = await Hotel.findById("asdasdas");
//         res.status(200).json(hotels);
//     } catch (error) {
//         next(err)
//     }
// }) 

router.get("/",async(req,res,next)=>{
    console.log("Hi i am hotel route")
    next()
    try {
        const hotels = await Hotel.find();
        res.status(200).json(hotels);
    } catch (error) {
        res.status(500).json(err);
    }
});

export default router 