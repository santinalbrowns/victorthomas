import { fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;


export const actions = {
    default: async ({ request, cookies }) => {
        const data = await request.formData();


        const firstname = data.get("firstname")?.toString();
        const lastname = data.get("lastname")?.toString();
        const email = data.get("email")?.toString();
        const password = data.get("password")?.toString();

        if (!firstname || !lastname || !email || !password) {
            return fail(400, { message: "All fields are required" });
        }


        const response = await fetch("http://localhost:5000/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: password,
            })
        });


        if (response.status == 201) {
            throw redirect(302, "/signin");
        } else {
            return fail(response.status, { message: await response.text() })
        }
    }
}