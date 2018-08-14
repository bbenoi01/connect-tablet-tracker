import { connect } from 'react-redux';
import Admin from '../components/admin';

function mapStoreToProps(store) {
    return {
        employees: store.app.employees,
        devices: store.app.devices,
        OS: store.admin.OS,
        model: store.admin.model,
        firstName: store.admin.firstName,
        lastName: store.admin.lastName
    }
}

export default connect(mapStoreToProps)(Admin);