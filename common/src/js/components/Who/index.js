import { connect } from 'react-redux';
import Who from './Who';

function mapStoreToProps(store) {
    return {
        employees: store.checkout.employees
    };
}

export default connect(mapStoreToProps)(Who);