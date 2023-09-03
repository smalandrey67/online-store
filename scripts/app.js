import { ProductsService } from "./services/products.service.js";
import { CategoriesService } from "./services/categories.service.js";

import { productTemplate } from "./templates/product.template.js";
import { categoryTemplate } from "./templates/category.template.js";

const productsWrapper = document.querySelector("#products");
const categoriesWrapper = document.querySelector("#categories");

export const baseUrl = "https://fakestoreapi.com";

// TODO LOADING EFFECT, Show network errors to user
async function getCategories() {
	try {
		const categories = await CategoriesService.getCategories();
		render(categories, categoriesWrapper, "categories");
	} catch (error) {
		console.error(error);
	}
}

async function getProducts() {
	try {
		const products = await ProductsService.getProducts();
		render(products, productsWrapper, "products");
	} catch (error) {
		console.error(error);
	}
}

function render(items, renderToElement, renderType) {
	let template = "";

	items.forEach((element) => {
		if (renderType === "categories") {
			template += categoryTemplate(element);
		}

		if (renderType === "products") {
			template += productTemplate(element);
		}
	});

	renderToElement.innerHTML = template;
}

// first load invoke
getCategories();
getProducts();
