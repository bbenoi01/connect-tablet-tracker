import { connect } from 'react-redux';
import Reps from './Reps';

function mapStoreToProps(store) {
    return {
        employees: store.admin.employees
    }
}

export default connect(mapStoreToProps)(Reps);