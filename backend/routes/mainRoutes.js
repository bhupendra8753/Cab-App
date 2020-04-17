const express=require('express');
const userController=require('../controllers/userController');
const driverController=require('../controllers/driverController');
const router=express.Router();

router.route('/user/signup').post(userController.signUpPage);
router.route('/user/login').post(userController.loginPage);
router.route('/user/booking').post(userController.createbooking);

router.route('/user/getdetails/:id').get(userController.getbookingById);
router.route('/user/getdetails').get(userController.getbooking);
router.route("/user/getdetails/:from_date/:to_date").get(userController.getbookingByDate)

router.route('/driver/signup').post(driverController.signUpPage);
router.route('/driver/login').post(driverController.loginPage);


module.exports=router;