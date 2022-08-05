import jwt from 'jsonwebtoken'
import fs from 'fs'

export default async function jwtVerifyToken(request, response, next) {
    const bearerHeader = request.headers['authorization'];
    // Check if bearer is undefined
    if(typeof bearerHeader !== 'undefined') {
        // Split at the space
        const bearer = bearerHeader.split(' ');
        // Get token from array
        let bearerToken = bearer[1];

        const privateKey = fs.readFileSync('storage/keys/private.key')

        jwt.verify(bearerToken, privateKey, (error, auth) => {
            if (error) {
                console.log('bad password')
                response.sendStatus(403)
            } else {
                next()
            }
        })

    } else {
        // Forbidden
        response.sendStatus(403);
    }
}