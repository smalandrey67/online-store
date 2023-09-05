import { ProductsService } from "../../scripts/services/products.service.js";

const params = new URLSearchParams(window.location.search);
const productId = params.get("productId");

// TASK
// 1. use try catch
// 2. create a new redner function call it render2
// 3. display some data to the page

async function getProductDetails() {
	const productDetails = await ProductsService.getProductDetails(productId);
	console.log(productDetails);
}

getProductDetails();
