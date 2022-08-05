import jwt from 'jsonwebtoken'

export async function index(request, response, next) {
    response.json('all invoices')
}