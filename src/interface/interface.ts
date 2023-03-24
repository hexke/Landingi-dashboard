
export interface Product {
    id: number,
    title: string,
    price: number,
    quantity: string,
    total: string,
    discountPercentage: number,
    discountedPrice: number
}


export interface Cart {
    id: number;
    products: Product[],
    total: number,
    discountedTotal: number,
    userId: number,
    totalProducts: number,
    totalQuantity: number
}

export interface Carts {
    carts: Cart[],
    total: number,
    skip: number,
    limit: number
}