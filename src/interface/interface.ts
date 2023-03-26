export interface IProduct {
    id: number,
    title: string,
    price: number,
    quantity: string,
    total: string,
    discountPercentage: number,
    discountedPrice: number
}

export interface ICart {
    id: number;
    products: IProduct[],
    total: number,
    discountedTotal: number,
    userId: number,
    totalProducts: number,
    totalQuantity: number
}

export interface ICarts {
    carts: ICart[],
    total: number,
    skip: number,
    limit: number
}