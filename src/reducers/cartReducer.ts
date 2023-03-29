export interface ICartProduct {
    id: number;
    title: string;
    quantity: number;
}

export interface CartAction {
    type: "ADD" | "CLEAR";
    payload: ICartProduct;
}

export interface CartState {
    userId: number;
    cart: ICartProduct[];
}

export const initialCartState: CartState = {
    userId: 1,
    cart: [] as ICartProduct[]
}

const cartReducer = (state: CartState, action: CartAction) => {
    const { type, payload } = action;

    if (type === 'ADD') {
        const searchedProductIndex = state.cart.findIndex(product => product.id === payload.id);

        if (searchedProductIndex === -1) {

            return {
                ...state,
                cart: [...state.cart, {
                    id: payload.id,
                    title: payload.title,
                    quantity: payload.quantity
                }]
            };

        } else {
            const cart = [...state.cart];
            cart[searchedProductIndex].quantity += payload.quantity;

            return {
                ...state, cart: [...cart]
            };
        }
    }

    if (type === "CLEAR") {
        return { ...initialCartState };
    }

    return { ...state };
}

export default cartReducer;