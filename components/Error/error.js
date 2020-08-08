class Error
{
    render()
    {
        const _html = `<div class="error">404</div>`;

        _root_error.innerHTML = _html;
    }
}

const _errorPage = new Error();