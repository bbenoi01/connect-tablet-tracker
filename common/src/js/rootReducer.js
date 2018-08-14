import { combineReducers } from 'redux';
import AppReducer from './reducers/appReducer';
import AdminReducer from './reducers/adminReducer';
import HistoryReducer from './reducers/historyReducer';
import CheckoutReducer from './reducers/checkoutReducer';

const rootReducer = combineReducers({
    app: AppReducer,
    admin: AdminReducer,
    history: HistoryReducer,
    checkout: CheckoutReducer
});

export default rootReducer;