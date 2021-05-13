import { environment} from '../../environments/environment';

export const baseUrl = environment.production ? 'https://api.shipping.com' : 'http://localhost:8080';
export const productsUrl = baseUrl + '/products';
export const productUrl = productsUrl + '/:id';
export const usersUrl = baseUrl + '/users';
export const userUrl = usersUrl + '/:id';
export const registerUrl = baseUrl + '/register';
export const loginUrl = baseUrl + '/login';
export const ordersUrl = baseUrl + '/shopOrders';
export const orderUrl = ordersUrl + '/:id';
export const cartsUrl = baseUrl + '/itemCarts';
export const cartUrl = cartsUrl + '/:id';

