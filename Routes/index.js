// need the router from express
const express = require('express');
const router = express.Router();


// import the controllers
const detailsController = require('../Controllers/Details');

// declare the routes and bind to the controller methods
router.get('/getAllDetails', detailsController.getAllDetails);
router.post('/saveDetails', detailsController.addDetails);
router.put('/updateDetails', detailsController.updateDetails);


// export the router
module.exports = router;