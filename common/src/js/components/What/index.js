import { connect } from 'react-redux';
import What from './What';

function mapStoreToProps(store) {
    return {
        deviceListItems: store.checkout.devices,
    };
}

export default connect(mapStoreToProps)(What);