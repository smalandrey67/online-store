import { baseUrl } from "../app.js";

export const ProductsService = {
	async getProducts() {
		const response = await fetch(`${baseUrl}/products`);

		if (!response.ok) {
			throw new Error(`Error status: ${response.status}`);
		}

		const products = await response.json();
		return products;
	}
};
