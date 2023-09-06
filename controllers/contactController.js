const Contact = require("../models/contactModel");




// get all contacts
const getContact = (req, res) => {
    res.status(200).json({message:"GET ALL CONTACTS"});
};
// get single contacts
const getSingleContact = (req, res) => {
    res.status(200).json({message:`GET single CONTACT ${req.params.id}`});
};

// create contact
const createContact = (req, res) => {
    console.log("The request body is:", req.body);
    const {name, email} = req.body;
    if (!name || !email || number) {
        res.status(400);
        throw new Error("Fill all fields")
        
    }
    res.status(201).json({message:"CREATE CONTACTS"});
};

// Update contact
const updateContact = (req, res) => {
    res.status(200).json({message:`UPDATE single CONTACT ${req.params.id}`});
};
// Delete Single contact
const deleteContact = (req, res) => {
    res.status(200).json({message:`DELETE single CONTACTS${req.params.ids}`});
};
module.exports = {getContact, getSingleContact, createContact, updateContact, deleteContact}