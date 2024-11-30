import { fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ cookies, fetch }) => {
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


export const actions = {
    default: async ({ request, cookies, fetch }) => {
        const token = cookies.get("token");

        const data = await request.formData();
        const product_id = data.get("product_id")?.toString();
        const quantity = Number(data.get("quantity"));
        const order_price = Number(data.get("order_price"));
        const selling_price = Number(data.get("selling_price"));
        const date = data.get("date")?.toString();

        if (!product_id || !quantity || !order_price || !selling_price || !date) {
            return fail(400, {
                message: "All fields are required.",
            });
        }

        const localDate = new Date(date);

        const utcDateTime = localDate.toISOString();

        const response = await fetch("http://localhost:5000/admin/purchases", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
            },

            body: JSON.stringify({
                product_id: Number(product_id),
                quantity: quantity,
                store_id: 1,
                order_price: order_price,
                selling_price: selling_price,
                date: utcDateTime
            }),
        });

        if (response.status === 201) {
            throw redirect(302, "/purchases");
        } else {
            const error = await response.text();
            return fail(response.status, {
                message: error,
            });
        }
    },
};