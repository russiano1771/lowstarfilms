

const router = require('express').Router();
const User = require('../models/user');
const CryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken')


// registration
router.post('/register', async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString()
    })
    const user = await newUser.save()
     return res.status(200).json(user)
})




// login

router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({email: req.body.email})
        !user && res.status(400).json({message: 'Wrong password or email'})

        const bytes  = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
        const originalPass = bytes.toString(CryptoJS.enc.Utf8);

        originalPass !== req.body.password && res.status(400).json({message: 'Wrong password or email'})

        const accessToken = jwt.sign(
            {id: user._id, isAdmin: user.isAdmin},
            process.env.SECRET_KEY,
            {expiresIn: '5d'}
            )

        const {password, ...info} = user._doc
        res.status(200).json({...info, accessToken})
    } catch (e) {
        res.status(500).json(e)
    }
})

module.exports = router