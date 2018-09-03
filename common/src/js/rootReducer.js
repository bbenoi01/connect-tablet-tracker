import { combineReducers } from 'redux';
import CheckoutReducer from './containers/Checkout/checkoutReducer';
import AdminReducer from './containers/Admin/adminReducer';
import AddDeviceReducer from './components/AddDevices/addDevicesReducer';
import AddRepsReducer from './components/AddReps/addRepsReducer';
import HistoryReducer from './components/History/historyReducer';
import WhatReducer from './components/What/whatReducer';
import WhoReducer from './components/Who/whoReducer';

const rootReducer = combineReducers({
    checkout: CheckoutReducer,
    admin: AdminReducer,
    addDevice: AddDeviceReducer,
    addReps: AddRepsReducer,
    history: HistoryReducer,
    what: WhatReducer,
    who: WhoReducer
});

export default rootReducer;