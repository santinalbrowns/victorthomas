import type { PageServerLoad } from './$types';

export const load = (async ({fetch, cookies}) => {
    const token = cookies.get("token");

    const response = await fetch("http://localhost:5000/admin/purchases", {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`,
        },
    })

    const purchases: ListResponse<Purchase> = await response.json();

    return {purchases};
}) satisfies PageServerLoad;