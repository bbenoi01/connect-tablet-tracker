import { connect } from 'react-redux';
import Admin from './Admin';

function mapStoreToProps(store) {
    return {
        devices: store.admin.devices,
        employees: store.admin.employees
    }
}

export default connect(mapStoreToProps)(Admin);