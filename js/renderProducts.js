const productsContainer = document.querySelector('#products-container');

let productsArray = [];
// Получаем данные из products.json
fetch('https://api.jsonbin.io/b/62558fe17b69e806cf4c6dfa')
	.then(response => response.json())  // Конвертируем данные из JSON формата в JS массив
	.then(data => {
		productsArray = data;
		renderProducts(productsArray);// Запускаем функцию рендера (отображения товаров)
	})
	.catch(() => {
		renderError();
})

function renderError() {
    const html = `
    <div class="error-container">
        <div class="error-message">
            <h3>Ошибка. Не удалось получить данные из сервера.</h3>
        </div>
    </div>
    `;

    document.getElementById("error").innerHTML = html;
}

function renderProducts(productsArray) {
    productsArray.forEach(function (item) {
        const productHTML = `<div class="col-md-4">
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