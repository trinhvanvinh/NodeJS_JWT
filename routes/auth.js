const router = require('express').Router();
const User = require('../model/User');

router.post('/register', async  (req, res)=>{
    const user= new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    console.log(user);
    try{
        const saveUser = await user.save();
        res.send(saveUser);
    }catch(err){
        res.status(400).send(err);
    }

});


module.exports = router;