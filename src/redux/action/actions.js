import { BUY_PRODUCT, DECREASE_PRODUCT, DELETE_PRODUCT, INCREASE_PRODUCT } from './constantsAction';

export const buyProduct = (product) => {
    return {
        type: BUY_PRODUCT,
        payload: product,
    };
};

export const increaseProduct = (product) => {
    return {
        type: INCREASE_PRODUCT,
        payload: product,
    };
};

export const decreaseProduct = (product) => {
    return {
        type: DECREASE_PRODUCT,
        payload: product,
    };
};

export const deleteProduct = (product) => {
    return {
        type: DELETE_PRODUCT,
        payload: product,
    };
};
