import jwt from 'jsonwebtoken'
import userModel from '../models/user.js'

const protect = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (token == null) return res.sendStatus(401)

    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
        //console.log(err)

        if (err) return res.sendStatus(403)
        req.user = await userModel.findById(decoded.id).select('-password')
        next()
    })
}

export default protect

