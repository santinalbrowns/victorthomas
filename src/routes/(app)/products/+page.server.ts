import type { PageServerLoad } from './$types';

export const load = (async ({ fetch, cookies }) => {

    const token = cookies.get("token");

    const response = await fetch("http://localhost:5000/admin/products", {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`,
        },
    })

    const products: ListResponse<Product> = await response.json();
    return { products };
}) satisfies PageServerLoad;