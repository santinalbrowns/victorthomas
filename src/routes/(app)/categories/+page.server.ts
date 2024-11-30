import type { PageServerLoad } from './$types';

export const load = (async ({ cookies, fetch }) => {

    const token = cookies.get("token");

    const response = await fetch("http://localhost:5000/admin/categories", {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`,
        },
    })

    const data: ListResponse<Category> = await response.json();


    return { categories: data };
}) satisfies PageServerLoad;