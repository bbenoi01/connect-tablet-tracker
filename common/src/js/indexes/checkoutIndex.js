import { connect } from 'react-redux';
import Checkout from '../components/checkout';

function mapStoreToProps(store) {
    return {
        employees: store.app.employees,
        deviceListItems: store.app.devices,
        historyItems: store.app.historyItems,
        name: store.checkout.name,
        device: store.checkout.device,
        date: store.checkout.date
    }
}

export default connect(mapStoreToProps)(Checkout);