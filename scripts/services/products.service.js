import { baseUrl } from "../app.js";

export const ProductsService = {
	async getProducts() {
		const response = await fetch(`${baseUrl}/products`);

		if (!response.ok) {
			throw new Error(`Error status: ${response.status}`);
		}

		const products = await response.json();
		return products;
	},

	async getProductDetails(productId) {
		const response = await fetch(`${baseUrl}/products/${productId}`);

		if (!response.ok) {
			throw new Error(`Error status: ${response.status}`);
		}

		const productDetails = await response.json();
		return productDetails;
	}
};
