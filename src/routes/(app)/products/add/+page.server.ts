import { fail, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ fetch, cookies }) => {

    const token = cookies.get("token");

    const response = await fetch("http://localhost:5000/admin/categories", {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`,
        },
    })

    const categories: ListResponse<Category> = await response.json();


    return { categories };
}) satisfies PageServerLoad;

export const actions = {
    default: async ({ request, cookies, fetch }) => {
        const token = cookies.get("token");
        const formData = await request.formData();

        const name = formData.get("name")?.toString();
        const description = formData.get("description")?.toString();
        const status = formData.has("status") ? "true" : "false";
        const visibility = formData.has("visibility") ? "true" : "false";
        const sku = formData.get("sku")?.toString();
        const category_id = formData.get("category_id")?.toString();
        const images = formData.getAll("images[]") as File[];

        if (!name || !description || !sku || !category_id || images.length === 0) {
            return fail(400, {
                message: "All fields are required, including at least one image.",
            });
        }

        const apiFormData = new FormData();
        apiFormData.append("name", name);
        apiFormData.append("description", description);
        apiFormData.append("status", status);
        apiFormData.append("visibility", visibility);
        apiFormData.append("sku", sku);
        apiFormData.append("category_id", category_id);

        images.forEach((image) => {
            apiFormData.append("images", image);
        });

        const response = await fetch("http://localhost:5000/admin/products", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: apiFormData,
        });

        if (response.ok) {
            throw redirect(302, "/products");
        } else {
            const error = await response.text();
            return fail(response.status, {
                message: error,
            });
        }
    },
};