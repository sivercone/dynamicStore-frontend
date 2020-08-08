class Products
{
    constructor()
    {
        this.classNameActive = 'item__button__active'
        this.labelAdd = 'Купить сейчас';
        this.labelRemove = 'Убрать из корзины';
    }

    handleSetLocationStorage(element, id)
    {
        // console.log(element, id);
        // объект который представляет два ключа return { _pushProduct, _products } из localStorageUtil.js
        const {_pushProduct, _products} = _localStorageUtil.putProducts(id);
        
        if(_pushProduct) // if true
        {
            element.classList.add(this.classNameActive);
            element.innerHTML = this.labelRemove;
        }
        else // if false
        {
            element.classList.remove(this.classNameActive);
            element.innerHTML = this.labelAdd;
        }

        _headerPage.render(_products.length); // реал тайм рендер кол-во корзины
    }

    render()
    {
        const _productsStorage = _localStorageUtil.getProducts();

        let _htmlCatalog = '';

        _catalog.forEach(({ id, titlename, developer, img, price }) =>
        {
            let _activeClass = '';
            let _activeText = '';
            if(_productsStorage.indexOf(id) === -1)
            {
                _activeText = this.labelAdd;
            }
            else
            {
                _activeClass = ' ' + this.classNameActive;
                _activeText = this.labelRemove;
            }

            // рендер товаров
            _htmlCatalog = _htmlCatalog + `
            <div class="item" id="item">
                <img src="${img}" alt="">
                <div class="item__content">
                    <div class="item__title" id="header">${titlename}</div>
                    <div class="item__suptitle">${developer}</div>
                    <div class="item__price">
                    ${price},00 ₴ 
                    <button class="item__button${_activeClass}" onclick="_productsPage.handleSetLocationStorage(this, '${id}')">${_activeText}</button>
                    </div>
                </div>
            </div>`;
        });

        const _html = _htmlCatalog;
        _root_products.innerHTML = _html;
    }
}

// выполнение рендера после исполнения всех функций внутри класса
const _productsPage = new Products();
