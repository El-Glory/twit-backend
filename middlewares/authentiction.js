import jwt from 'jsonwebtoken'
import statusCodes from '../helpers/statusCodes'

const authentication = (req, res, next) => {
    try {
        const header = req.headers.authorization;
        if(!header || header === "") return res.status(401).json({
            status: statusCodes.unAuthorized,
            error: "Authentication failed"
        })
    } catch (error) {
        
    }
}