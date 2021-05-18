import { mount as ProductMount } from 'products/ProductsIndex';
import { mount as CartMount } from 'cart/CartShow';

console.log('Container-log!');

ProductMount(document.querySelector('#my-products'));
CartMount(document.querySelector('#my-cart'))