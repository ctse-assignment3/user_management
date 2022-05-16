const express = require('express');
const router = express.Router();
const usersController = require("../controllers/user.controller");

module.exports = function(){
router.post('/register', usersController.register); // handle any file using multer and save before passing controll to the registration controller
router.post('/signin', usersController.signin);
router.get('/profile/:email', usersController.getProfile);
router.put('/update-profile/:email', usersController.updateProfile)

return router
}


