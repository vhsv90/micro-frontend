import faker from 'faker';

const mount = (el) => {

    let products = '';

    for (let i = 0; i < 9; i++)
    {
        const name = faker.commerce.productName();
        products += `<div>${name}</div><br/>`;
    }

    el.innerHTML = products;

};

if(process.env.NODE_ENV === 'development'){
    
    // this element will be available only in products/html
    // avoid using this id #dev-products in container app
    const el = document.querySelector('#dev-products');
    
    if (el){
        mount(el);
    }
}

export { mount };