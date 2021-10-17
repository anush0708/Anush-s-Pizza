const bcrypt = require('bcrypt')
const signupRouter = require('express').Router()
const User = require('../models/user')

signupRouter.post('/', async (request, response,next) => {
  const body = request.body
  const saltRounds = 10
  const passwordHash = await bcrypt.hash(body.password, saltRounds)
  // const test= await User.find({username:body.username})

  // if (test) {
  //   return response.status(401).json({
  //     error: '  username already exists '
  //   })
  // }

    const user = new User({
        username: body.username,
         mail: body.mail,
         passwordHash,
        cart:[]
    })
      try{
        const savedUser = await user.save()
        const userForToken = {
          username: savedUser.username,
          id: savedUser._id,
        }
        const token = jwt.sign(userForToken, process.env.SECRET,{ expiresIn: 60*60*60*60 })
           response
            .status(200)
          .send({ token, username: savedUser.username })
        }
      catch(error){next(error)}

    
   
   
      
    // response.status(400).send({message:"user already exists"})
   
})
module.exports = signupRouter