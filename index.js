function render()
{
    // header + shopping
    const _shopCount = _localStorageUtil.getProducts(); // кол-во продуктов в корзине
    _headerPage.render(_shopCount.length);

    // products
    _productsPage.render(); 
}

//loader
_loaderPage.render();

let _catalog = [];

// ajax
// http://localhost:8080/index.html
fetch('server/catalog.json')
    .then(res => res.json())
    .then(body =>
        {
            _catalog = body
            setTimeout(() => 
            {
                _loaderPage.loaderClear();
                render(); // рендер 
            },1000);
        })
    .catch(error =>
        {
            _loaderPage.loaderClear();
            _errorPage.render();
        });