import { baseUrl } from "../app.js";

export const CategoriesService = {
	async getCategories() {
		const response = await fetch(`${baseUrl}/products/categories`);

		if (!response.ok) {
			throw new Error(`Error status: ${response.status}`);
		}

		const categories = await response.json();
		return categories;
	}
};
