import express from "express";
import { createHotel, 
        deleteHotel, 
        getHotel, 
        getHotels, 
        updateHotel 
    } from "../controllers/hotel.js";
    
import Hotel from "../models/Hotel.js";
//import { createError } from "../utils/error.js";

const router = express.Router();

//create
router.post("/", createHotel)
    // const newHotel = new Hotel(req.body)

    // try {
    //     const savedHotel = await newHotel.save()
    //     res.status(200).json(savedHotel)
    // } catch (error) {
    //     res.status(500).json(err)
    // } })


 //update
 
router.put("/:id",updateHotel) 
//  async (req,res)=>{
    
//     try {
//         const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id,{$set: req.body},{new: true})
//         res.status(200).json(updatedHotel)
//     } catch (error) {
//         res.status(500).json(err)
//     }
// })

// //Delete

router.delete("/:id", deleteHotel)
// async (req,res)=>{
    
//     try {
//         const Hotel = await Hotel.findByIdAndDelete(req.params.id)
//         res.status(200).json("Hotel has been deleted")
//     } catch (error) {
//         res.status(500).json(err)
//     }
// })

//Get

router.get("/:id", getHotel)
// async (req,res)=>{
    
//     try {
//         const hotel = await Hotel.findById(req.params.id)
//         res.status(200).json(hotel)
//     } catch (error) {
//         res.status(500).json(err)
//     }
// })

//Get all

// router.get("/", async (req,res,next)=>{
    
//     // console.log("this is hotel route")
//     try {
//         const hotels = await Hotel.find();
//         res.status(200).json(hotels);
//     } catch (error) {
//         next(err)
//     }
// }) 

router.get("/", getHotels)

// async(req,res,next)=>{
    
//     try {
//         const hotels = await Hotel.find();
//         res.status(200).json(hotels);
//     } catch (error) {
        
//         next(error)
//     }
// });

export default router 