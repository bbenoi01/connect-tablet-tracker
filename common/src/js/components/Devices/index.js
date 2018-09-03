import { connect } from 'react-redux';
import Devices from './Devices';

function mapStoreToProps(store) {
    return {
        devices: store.admin.devices
    }
}
export default connect(mapStoreToProps)(Devices);