import faker from 'faker';

let products = '';

for (let i = 0; i < 9; i++)
{
    const name = faker.commerce.productName();
    products += `<div>${name}</div><br/>`;
}

document.querySelector('#dev-products').innerHTML = products;