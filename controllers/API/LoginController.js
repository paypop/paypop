import jwt from 'jsonwebtoken'
import fs from 'fs'

export async function login(request, response) {
    const user = {
        id: 1,
        name: 'test',
        email: 'test@test.com'
    }

    const privateKey = fs.readFileSync('storage/keys/private.key')

    //const token = await jwt.sign({user}, privateKey, {expiresIn: '180s'})
    const token = await jwt.sign({user}, privateKey, {
        expiresIn: '180s'
    })


    response.json(token)
}