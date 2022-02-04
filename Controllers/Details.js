// import the model
const Details = require('../Models/Details');


// export the controller functionalities

exports.getAllDetails = (req, res) => {
    Details.find().then(result => {
        res.status(200).json({
            message: 'Details fetched',
            details: result
        });
    }).catch(error => {
        res.status(500).json({
            message: 'Error in Database',
            details: error
        });
    });
}

exports.addDetails = (req, res) => {

    const {
        fullname,
        mobile,
        email,
        pic,
        dob,
        jobtype,
        location
    } = req.body;

    // create an object of the User Model Class
    const userObj = new Details({
        fullname: fullname,
        mobile: mobile,
        email: email,
        pic: pic,
        dob: dob,
        jobtype: jobtype,
        location: location
    });

    // call a save method on this Object
    userObj.save().then(result => {
        res.status(200).json({
            message: 'User added Successfully !!',
            details: result
        });
    }).catch(error => {
        res.status(500).json({
            message: 'Error in Database',
            error: error
        });
    });
}
exports.updateDetails = (req, res) => {
    const {
        query,
        data,
       
    } = req.body;

    Details.updateMany(query,data).then(result => {
        res.status(200).json(
            
            {
            message: 'Update Successful'
        });
        console.log(result.matchedCount)
    })
    .catch(error => {
        res.status(500).json({
            message: 'Error in Database',
            details: error
        });
    });
    
    //CREATING A COLLECTION IN MONGODB USING NODE.JS
    
}