import { fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ params, fetch, cookies }) => {

    const token = cookies.get("token");

    const response = await fetch(`http://localhost:5000/admin/categories/${params.id}`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`,
        },
    })

    const data: Category = await response.json();

    return { category: data };
}) satisfies PageServerLoad;

export const actions = {
    update: async ({ request, cookies, fetch, params }) => {
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

        const response = await fetch(`http://localhost:5000/admin/categories/${params.id}`, {
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${token}`,
            },
            body: data
        })

        if (response.ok) {
            throw redirect(302, "/categories")
        } else {
            const error = await response.text()

            return fail(response.status, {
                message: error
            });
        }
    },
    delete: async ({ cookies, fetch, params }) => {
        const token = cookies.get("token");

        const response = await fetch(`http://localhost:5000/admin/categories/${params.id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`,
            },
        })


        if (response.ok) {
            throw redirect(302, "/categories")
        } else {
            const error = await response.text()

            return fail(response.status, {
                message: error
            });
        }
    }
}