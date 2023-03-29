
const BASE_URL = "https://dummyjson.com/carts";
const PRODUCTS_URL = "https://dummyjson.com/products";

export async function getAllCarts() {
    const response = await fetch(`${BASE_URL}`);

    return response;
}

export async function getCart(cartId: number) {
    const response = await fetch(`${BASE_URL}/${cartId}`);

    return response;
}

export async function deleteCart(cartId: number) {
    const response = await fetch(`${BASE_URL}/${cartId}`, { method: "DELETE" });

    return response;
}

export async function createCart(productsJson: string = '') {
    const response = await fetch(`${BASE_URL}/add`,
        {
            method: "POST",
            body: productsJson,
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );

    return response;
}

export async function getAllProducts() {
    const response = await fetch(`${PRODUCTS_URL}`);

    return response;
}

export function calculateSingleDiscountedPrice(discountedPrice: number, quantity: number) {
    return +(discountedPrice / quantity).toFixed(2);
}