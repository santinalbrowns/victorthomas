// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	type ListResponse<T> = {
		limit: number;
		offset: number;
		total: number;
		data: T[]
	}

	type Category = {
		id: number,
		slug: string,
		name: string,
		enabled: boolean,
		show_in_menu: boolean,
		show_products: boolean,
		image_id: number
	}

	interface Product {
		id: number,
		slug: string,
		name: string,
		description: string,
		sku: string,
		category_id: number,
		status: boolean,
		visibility: boolean,
		image: Array<Image>,
		quantity: number;
		price: number;
	}

	interface Image {
		id: number,
		name: string
	}

	interface Purchase {
		id: number,
		product: Product,
		quantity: number,
		order_price: number,
		selling_price: number,
		date: string
	}

	interface OrderDetails {
		customer: Customer;
	}

	interface Customer {
		id: number;
		firstname: string;
		lastname: string;
		email: string;
		phone: string;
	}

	interface Order {
		id: number;
		number: string;
		channel: string;
		status: string;
		total: number;
		items: Product[];
		details: OrderDetails;
		created_at: string;
	}

	interface Reports {
		sales: number,
		purchases: number,
		products: number,
		categories: number
	}

}

export { };
