export function productTemplate(productData) {
	return `
        <article class="product">
            <div class="product__image">
                <img src="${productData.image}" alt="${productData.title}"/>
            </div>
            <h5>${productData.title}</h5>
            <div>${productData.price}</div>
        </article>
	`;
}
