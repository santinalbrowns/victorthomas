import { fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;


export const actions = {
    default: async ({ request, cookies, fetch }) => {
        const token = cookies.get("token");

        const data = await request.formData();

        const name = data.get("name")?.toString();
        const image = data.get("image") as File

        if (!name) {
            return fail(400, {
                message: 'You must provide category name'
            });
        }
        const formData = new FormData();

        if (image.name || image.name !== 'undefined') {
            formData.append('file', image);
        }

        const response = await fetch("http://localhost:5000/admin/categories", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
            },
            body: data
        })


        if (response.status == 201) {
            throw redirect(302, "/categories")
        } else {
            const error = await response.text()

            return fail(response.status, {
                message: error
            });
        }
    }
}