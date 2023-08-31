const productsWrapper = document.querySelector("#products");
const categoriesWrapper = document.querySelector("#categories");

const url = "https://fakestoreapi.com";

// TODO LOADING EFFECT, Show network errors to user

const apiServices = {
	async categoriesService() {
		const response = await fetch(`${url}/products/categories`);

		if (!response.ok) {
			throw new Error(`Error status: ${response.status}`);
		}

		const categories = await response.json();
		return categories;
	},
	async productsService() {
		const response = await fetch(`${url}/products`);

		if (!response.ok) {
			throw new Error(`Error status: ${response.status}`);
		}

		const products = await response.json();
		return products;
	}
};

async function getCategories() {
	try {
		const categories = await apiServices.categoriesService();
		render(categories, categoriesWrapper, "categories");
	} catch (error) {
		console.error(error);
	}
}

async function getProducts() {
	try {
		const products = await apiServices.productsService();
		render(products, productsWrapper, "products");
	} catch (error) {
		console.error(error);
	}
}

const templates = {
	getCategoryTemplate(categoryName) {
		return `<button>${categoryName}</button>`;
	},
	getProductTemplate(product) {
		return `
			<article class="product">
				<div class="product__image">
					<img src="${product.image}" alt="${product.title}"/>
				</div>
                <h5>${product.title}</h5>
                <div>${product.price}</div>
            </article>
		`;
	}
};

function render(items, renderToElement, renderType) {
	let template = "";

	items.forEach((element) => {
		if (renderType === "categories") {
			template += templates.getCategoryTemplate(element);
		}

		if (renderType === "products") {
			template += templates.getProductTemplate(element);
		}
	});

	renderToElement.innerHTML = template;
}

// first load invoke
getCategories();
getProducts();
