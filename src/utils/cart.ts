
const BASE_URL = "https://dummyjson.com/carts";

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

export function calculateSingleDiscountedPrice(discountedPrice: number, quantity: number) {
    return +(discountedPrice / quantity).toFixed(2);
}