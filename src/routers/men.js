const express = require("express");
const router = new express.Router();
const MensRanking = require("../models/mens")

router.post("/men", async (req,res) =>{
    try{
        const addingMen = new MensRanking(req.body);
        const insertMen = await addingMen.save();
        res.status(201).send(insertMen);
    }catch(e){
        res.status(400).send(e);
    }
});

router.get("/men", async (req,res) =>{
    try{
        const getMen = await MensRanking.find({}).sort({"ranking":1});
        res.status(200).send(getMen);
    }catch(e){
        res.status(400).send(e);
    }
});

router.get("/man/:id", async (req,res) =>{
    try{
        const _id = req.params.id;
        const getMan = await MensRanking.findById(_id);
        res.status(200).send(getMan);
    }catch(e){
        res.status(400).send(e);
    }
});

router.patch("/man/:id", async (req,res) =>{
    try{
        const _id = req.params.id;
        const updateMan = await MensRanking.findByIdAndUpdate(_id, req.body, {
            new:true
        });
        res.status(200).send(updateMan);
    }catch(e){
        res.status(500).send(e);
    }
});

router.delete("/man/:id", async (req,res) =>{
    try{
        const _id = req.params.id;
        const deleteMan = await MensRanking.findByIdAndDelete(_id, req.body, {
            new:true
        });
        res.status(200).send(deleteMan);
    }catch(e){
        res.status(500).send(e);
    }
});

module.exports = router; 