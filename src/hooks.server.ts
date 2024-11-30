import { redirect, type Handle } from '@sveltejs/kit';
import * as jose from 'jose'
import fs from 'fs/promises';
import { env } from '$env/dynamic/private';
//import { JWT_KEY } from '$env/static/private';

export const handle: Handle = async ({ event, resolve }) => {

    const token = event.cookies.get("token");

    if (token) {
        const alg = 'Ed25519'

        // Read the public key from the pem file
        const publicKeyPem = await fs.readFile(env.JWT_KEY, 'utf8');
        const publicKey = await jose.importSPKI(publicKeyPem, alg)

        try {
            const { payload } = await jose.jwtVerify(token, publicKey, {
                issuer: 'http://localhost:5000',
                audience: 'api',
            })

            const roles: string[] = payload.roles as any

            if (payload.sub) {
                //event.locals.user = parseInt(payload.sub)
            }
            
            //event.locals.roles = roles;

        } catch (error) {
            event.cookies.delete("token", {path: "/"});

            throw redirect(302, "/login")
        }
    }



    const response = await resolve(event); return response;
};