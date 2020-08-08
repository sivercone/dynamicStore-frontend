class Header
{
    openShoppingPage()
    { 
        _shoppingPage.render();
    }

    render(count)
    {
        const _html = `
        <div class="header__logo">Dynamic Store</div>
        <div class="header__logo"><img src="img/nested-hexagons.svg" alt=""></div>
        <div class="header__logo shop" onclick="_headerPage.openShoppingPage();">${count}🛒</div>`;

        _root_header.innerHTML = _html;
    }
}

const _headerPage = new Header();

