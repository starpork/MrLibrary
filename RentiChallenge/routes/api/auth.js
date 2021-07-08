const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../../middleware/auth')

//Item Model
const User = require('../../models/user');



/**
 * @route   POST api/auth/login
 * @desc    Login user
 * @access  Public
 */

 router.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    // Simple validation
    if (!email || !password) {
      return res.status(400).json({ msg: 'Please enter all fields' });
    }
  
    try {
      // Check for existing user
      const user = await User.findOne({ email });
      if (!user) throw Error('User does not exist');
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) throw Error('Invalid credentials');
  
      const token = jwt.sign({ id: user._id }, config.get('jwtSecret'), { expiresIn: 3600 });
      if (!token) throw Error('Couldnt sign the token');
  
      res.status(200).json({
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email
        }
      });
    } catch (e) {
      res.status(400).json({ msg: e.message });
    }
  });

  /**
 * @route   POST api/users
 * @desc    Register new user
 * @access  Public
 */

router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    // Simple validation
    if (!name || !email || !password) {
      return res.status(400).json({ msg: 'Please enter all fields' });
    }
  
    try {
      const user = await User.findOne({ email });
      if (user) throw Error('User already exists');
  
      const salt = await bcrypt.genSalt(10);
      if (!salt) throw Error('Something went wrong with bcrypt');
  
      const hash = await bcrypt.hash(password, salt);
      if (!hash) throw Error('Something went wrong hashing the password');
  
      const newUser = new User({
        name,
        email,
        password: hash
      });
  
      const savedUser = await newUser.save();
      if (!savedUser) throw Error('Something went wrong saving the user');
  
      const token = jwt.sign({ id: savedUser._id }, config.get('jwtSecret'), {
        expiresIn: 3600
      });
  
      res.status(200).json({
        token,
        user: {
          id: savedUser.id,
          name: savedUser.name,
          email: savedUser.email
        }
      });
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  });
/*
router.post('/register', (req, res) => {
    const { email, password} = req.body;

    //validation
    if( !email || !password )
    {
        return res.status(400).json({msg: 'Please enter all fields'})
    }

    // check for existing user
    User.findOne({email}).
    then(user => {
        if(!user)        
            return res.status(400).json({msg: 'User does not exist'});    
            
        //validate pw
        bcrypt.compare(password,user.password)  
        .then(isMatch => {

        if(!isMatch) return res.status(400).json({msg: 'Invalid credentials'});

        jwt.sign(
            {id: user.id },
            config.get('jwtSecret'),
            {expiresIn: 3600},
            (err, token) => {
                if(err) throw err;
                
                res.json({
                    token,
                    user: {
                        id: user.id,
                        name: user.name,
                        email: user.email
                    }
                })
            }
        )

        })
        
    })
});
*/
// @route GET api/auth/user
// @desc Get user data
// @access Public
router.get('/user', auth, (req, res) => {
    User.findById(req.user.id)
    .select('-password')
    .then(user => res.json(user))
})

module.exports = router;