/********************************************************************************************************************************************************************** 
    localStorage.getItem - метод возвращающий значение, лежащее в хранилище по указанному ключу. 
    Является строкой DOMString, содержащей значение для соответствующего ключа. Если ключ не существует, то будет возвращено значение null.
    Интерфейс Storage из WebStorageAPI предоставляет доступ для local storage для конкретного домена, 
    позволяя вам к примеру добавлять, изменять или удалять сохранённые элементы данных.
**********************************************************************************************************************************************************************/

// локальное хранилище для корзины
class LocalStorageUtil
{
    constructor()
    {
        // 'product' - рандомное название не относящее никчему, для работы в Chrome: Application 
        this.keyName = 'product';
    }

    /// получить из локального хранилища ///
    getProducts()
    {
        // Передав имя ключа, метод вернёт значение ключа. 
        const _productsLocalStorage = localStorage.getItem(this.keyName);
        if(_productsLocalStorage !== null)
        {
            // конвертирование из строки в объект
            return JSON.parse(_productsLocalStorage);
        } //else
        return [];
    }

    /// добавить в локальное хранилище ///
    putProducts(id)
    {
        let _products = this.getProducts();
        let _pushProduct = false;
        const index = _products.indexOf(id);

        if(index === -1)
        {
            _products.push(id);
            _pushProduct = true;
        }
        else
        {
            _products.splice(index, 1);
        }

        localStorage.setItem(this.keyName, JSON.stringify(_products)); 

        return { _pushProduct, _products }
    }
}

const _localStorageUtil = new LocalStorageUtil();