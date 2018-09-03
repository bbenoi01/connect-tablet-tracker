import { connect } from 'react-redux';
import AddDevices from './AddDevices';

function mapStoreToProps(store) {
    return {
        OS: store.addDevice.OS,
        model: store.addDevice.model
    }
}

export default connect(mapStoreToProps)(AddDevices);