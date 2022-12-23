import { BUY_PRODUCT, DELETE_PRODUCT, INCREASE_PRODUCT } from './constantsAction';

const initialState = {
    cartAr: [],
    totalPriceProduct: 0,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_PRODUCT:
            const productInCart = state.cartAr.find((p) => p.id === action.payload.id);
            if (!productInCart) {
                return {
                    cartAr: [...state.cartAr, action.payload],
                    totalPriceProduct: state.totalPriceProduct + action.payload.price,
                };
            } else {
                let newCart = state.cartAr;
                const objIndex = newCart.findIndex((obj) => obj.id === action.payload.id);
                if (newCart[objIndex].quantity === undefined) {
                    newCart[objIndex].quantity = 2;
                } else {
                    newCart[objIndex].quantity = newCart[objIndex].quantity + 1;
                }

                return { cartAr: [...newCart], totalPriceProduct: state.totalPriceProduct + action.payload.price };
            }
        case DELETE_PRODUCT:
            let newCart = state.cartAr;
            const objIndex = newCart.findIndex((obj) => obj.id === action.payload.id);
            if (newCart[objIndex].quantity === undefined) {
                newCart[objIndex].quantity = 1;
            }
            newCart.splice(objIndex, 1);
            return {
                cartAr: [...newCart],
                totalPriceProduct: state.totalPriceProduct - action.payload.price * action.payload.quantity,
            };
        case INCREASE_PRODUCT:
        default:
            return state;
    }
};

export default cartReducer;
