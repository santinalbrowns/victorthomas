import { fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;


export const actions = {
    default: async ({ request, cookies, fetch, params }) => {
        const token = cookies.get("token");

        const response = await fetch(`http://localhost:5000/admin/purchases/${params.id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        if (response.ok) {
            throw redirect(302, "/purchases");
        } else {
            const error = await response.text();
            return fail(response.status, {
                message: error,
            });
        }
    },
};