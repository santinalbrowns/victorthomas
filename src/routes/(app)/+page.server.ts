import type { PageServerLoad } from './$types';

export const load = (async ({ cookies }) => {

    const token = cookies.get("token");

    let response = await fetch("http://localhost:5000/admin/reports/summary", {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`,
        },
    });

    const reports: Reports = await response.json();
    
    response = await fetch("http://localhost:5000/customer/orders", {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`,
        },
    });

    const orders = await response.json();

    const totalPrice = orders.data.reduce((acc: any, order: any) => acc + order.total, 0);

    return { reports, totalPrice };
}) satisfies PageServerLoad;