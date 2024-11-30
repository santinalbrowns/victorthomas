import type { PageServerLoad } from './$types';

export const load = (async ({ cookies, fetch }) => {
    const token = cookies.get("token");

    const response = await fetch("http://localhost:5000/admin/orders?store=online", {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`,
        },
    })

    const orders: ListResponse<Order> = await response.json();

    return { orders };
}) satisfies PageServerLoad;