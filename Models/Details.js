// import mongoose
const mongoose = require('mongoose');

// create a schema
const Schema = mongoose.Schema;

// we need to declare the fields present in the mongodb collection
const DetailsSchema = new Schema(
    {
        fullname: {
            type: String,
            required: true
        },
        mobile: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        pic: {
            type: String,
            required: true
        },
        dob: {
            type: String,
            required: true
        },
        jobtype: {
            type: String,
            required: true
        },
        location: {
            type: String,
            required: true
        },
    }
);


// create a model using the schema, connect to MongoDB and export the model
module.exports = mongoose.model('Details', DetailsSchema, 'Details');