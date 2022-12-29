import actionTypes from '../action/actionTypes';

const initialState = {
    cartAr: [],
    totalPriceProduct: 0,
};

const cartReducer = (state = initialState, action) => {
    const productInCart = state.cartAr.find((p) => p.id === action.payload.id);
    let newCart = state.cartAr;
    const objIndex = newCart.findIndex((obj) => obj.id === action.payload.id);
    switch (action.type) {
        case actionTypes.BUY_PRODUCT:
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
        case actionTypes.DELETE_PRODUCT:
            if (newCart[objIndex].quantity === undefined) {
                newCart[objIndex].quantity = 1;
            }
            newCart.splice(objIndex, 1);
            return {
                cartAr: [...newCart],
                totalPriceProduct: state.totalPriceProduct - action.payload.price * action.payload.quantity,
            };
        case actionTypes.INCREASE_PRODUCT:
            if (productInCart) {
                if (newCart[objIndex].quantity === undefined) {
                    newCart[objIndex].quantity = 2;
                } else {
                    newCart[objIndex].quantity = newCart[objIndex].quantity + 1;
                }
            }
            return {
                cartAr: [...newCart],
                totalPriceProduct: state.totalPriceProduct + action.payload.price,
            };
        case actionTypes.DECREASE_PRODUCT:
            if (productInCart && newCart[objIndex].quantity > 1) {
                newCart[objIndex].quantity--;
            } else {
                newCart.splice(objIndex, 1);
            }
            return {
                cartAr: [...newCart],
                totalPriceProduct: state.totalPriceProduct - action.payload.price,
            };
        default:
            return state;
    }
};

export default cartReducer;
