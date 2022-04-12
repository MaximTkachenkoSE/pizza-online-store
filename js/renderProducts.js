const productsContainer = document.querySelector('#products-container');

// Запускаем getProducts
getProducts();

// Асинхронная функция получения данных из файла products.json
async function getProducts() {
	// Получаем данные из products.json
    const response = await fetch('https://api.jsonbin.io/b/62558fe17b69e806cf4c6dfa');
    // Парсим данные из JSON формата в JS
    const productsArray = await response.json();
    // Запускаем ф-ю рендера (отображения товаров)
	renderProducts(productsArray);
}

function renderProducts(productsArray) {
    productsArray.forEach(function (item) {
        const productHTML = `<div class="col-md-6">
						<div class="card mb-4" data-id="${item.id}">
							<img class="product-img" src="${item.imgSrc}" alt="">
							<div class="card-body text-center">
								<h4 class="item-title">${item.title}</h4>

								<div class="details-wrapper">

									<!-- Счетчик -->
									<div class="items counter-wrapper">
										<div class="items__control" data-action="minus">-</div>
										<div class="items__current" data-counter>1</div>
										<div class="items__control" data-action="plus">+</div>
									</div>
									<!-- // Счетчик -->

									<div class="price">
										<div class="price__weight">${item.weight}г.</div>
										<div class="price__currency">${item.price} ₴</div>
									</div>
								</div>

								<button data-cart type="button" class="btn btn-block btn-outline-warning">
									добавить в корзину
								</button>

							</div>
						</div>
					</div>`;
        productsContainer.insertAdjacentHTML('beforeend', productHTML);
    });
}