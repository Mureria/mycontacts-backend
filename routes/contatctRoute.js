const express = require("express");
const router = express.Router();
const {getContact, createContact, updateContact, deleteContact, getSingleContact} =require("../controllers/contactController")


// Get Contacts  // Create Contact
router.route("/").get(getContact).post(createContact);

// Get Single Contact // Update Single Contact // Delete single Contact
router.route("/:id").get(getSingleContact).put(updateContact).delete(deleteContact);


module.exports = router;