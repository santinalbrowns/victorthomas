import { fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;


export const actions = {
    default: async ({ request, cookies }) => {
        const data = await request.formData();

        const email = data.get("email")?.toString();
        const password = data.get("password")?.toString();

        if (!email || !password) {
            return fail(400, { message: "All fields are required" });
        }


        const response = await fetch("http://localhost:5000/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password,
            })
        });

        if (response.ok) {

            const json = await response.json();

            cookies.set('token', json.token, {
                path: '/',
                httpOnly: true,
                sameSite: 'lax',
                maxAge: 60 * 60 * 24 * 30, // set cookie to expire after 5 minutes
            });

            throw redirect(302, "/");

        } else if (response.status == 401) {
            return fail(response.status, { message: "Your email or password is incorrect" })
        } 
        else {
            return fail(response.status, { message: await response.text() })
        }
    }
}