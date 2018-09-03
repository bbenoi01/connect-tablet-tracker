import { connect } from 'react-redux';
import Checkout from './Checkout';

function mapStoreToProps(store) {
    return {
        name: store.who.name,
        device: store.what.device,
        date: store.what.date,
        time: store.what.time,
        timestamp: store.what.timestamp
    }
}

export default connect(mapStoreToProps)(Checkout);