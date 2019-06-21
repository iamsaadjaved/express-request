const express = require("express");
const Profiles = require("../models/profiles");
const routes = express.Router()



// create user with post method //

routes.post("/profiles", async (req, res ) => {
    try {
      
      const profile = await Profiles(req.body).save()
      console.log(req.body)
      // await profile.save()
      
      console.log(profile)
      res.send(profile);

    } catch (e) {
      res.status(400).send(e);
      // console.log(e)
    }
  });
  
  // Get All user //
  
  routes.get("/profiles", async (req, res) => {
    try {
      const profiles = await Profiles.find({});
  
      if (!profiles) {
        res.status(404);
      }
  
      res.send(profiles);
    } catch (e) {
      res.status(500).send(e);
    }
  });
  
  // find record by user ID //
  
  routes.get("/profiles/:id", async (req, res) => {
    const id = req.params.id;
  
    try {
      const profile = await Profiles.findById(id);
  
      if (!profile) {
        res.status(404);
      }
  
      res.send(profile);
    } catch (e) {
      res.status(500);
    }
  });
  
  // Patch : For updating user data in database //
  
  routes.patch("/profiles/:id", async (req, res) => {
    const changedProfile = req.body
    const fieldsToUpdate = Object.keys(changedProfile)  ;
    const fieldsInModel = ["name", "age", "graduate", "email" , "password"];
    const isUpdateAllowed = fieldsToUpdate.every(filed => fieldsInModel.includes(filed));
  
    if (!isUpdateAllowed) {
      return res.status(400).send({ error: "invalid fields" });
    }
  
    try {
      // const profile = await Profiles.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
      const profile = await Profiles.findById(req.params.id)
      
      if (!profile) {
        return res.status(404).send();
      }

      Object.assign(profile , changedProfile)

      await profile.save()
  
      res.send(profile);
    } 
    
    catch (e) {
      res.status(400).send(e);
    }
  });
  
  // Delete method for delete profile //
  
  routes.delete("/profiles/:id", async (req, res) => {
    try {
      const profile = await Profiles.findByIdAndDelete(req.params.id);
      if (!profile) {
        res.status(404);
      }
      res.send(profile);
    } catch (e) {
        console.log(e)
        res.status(500).send(e)
    }
  });

  module.exports = routes
  
  