class Shopping
{
    shoppingPageClear()
    {
        _root_shopping.innerHTML = '';
    }

    render()
    {
        const _productsStorage = _localStorageUtil.getProducts();
        let _htmlCatalog = '';
        let _amountShopping = 0;

        _catalog.forEach(({ id, titlename, price }) =>
        {
            //показать товары которые находятся в локальном хранилище \\(chrome::application)
            if(_productsStorage.indexOf(id) !== -1)
            {
                _htmlCatalog = _htmlCatalog + `
                <div class="shopping__content">
                    <div class="shopping__text">${titlename}</div>
                    <div class="shopping__amount">${price},00 ₴</div>
                </div>`;

                _amountShopping = _amountShopping + price;
            }
        });

        const _html = `
        <div class="shopping" id="shopping">
            <button class="shopping__btn" onclick="_shoppingPage.shoppingPageClear();">вернуться к покупкам</button>
            ${_htmlCatalog}
            <div class="shopping__content__amount">
                <div>Общая сумма:</div>
                <div>${_amountShopping},00 ₴</div>
            </div>
        </div>`;
        _root_shopping.innerHTML = _html;
    }
}

const _shoppingPage = new Shopping();