export function productTemplate(productData) {
	return `
        <article class="product">
            <div class="product__image">
                <a href="/onlineStore/pages/productDetails/productDetails.html?productId=${productData.id}">
                    <img src="${productData.image}" alt="${productData.title}"/>
                </a>
            </div>
            <h5>${productData.title}</h5>
            <div>${productData.price}</div>
        </article>
	`;
}
