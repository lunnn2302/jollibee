import { combineReducers } from 'redux';
import cartReducer from './pages/Menu/cartReducer';

const rootReducer = combineReducers({
    cart: cartReducer,
});

export default rootReducer;
