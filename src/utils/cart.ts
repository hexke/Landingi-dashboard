
const BASE_URL = "https://dummyjson.com/carts";

export async function getAllCarts() {
    const response = await fetch(`${BASE_URL}`);

    return response.json();
}

export async function getCart(cartId: number) {
    const response = await fetch(`${BASE_URL}/${cartId}`);

    return response.json();
}