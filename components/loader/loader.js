class Loader
{
    loaderClear()
    {
        _root_loader.innerHTML = ``;
        _root_loader.classList.remove('loader__container');
    }

    render()
    {
        const _html = `<div class="loader"></div>`;

        _root_loader.innerHTML = _html;
    }
}

const _loaderPage = new Loader();
