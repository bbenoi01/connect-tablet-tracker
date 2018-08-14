import { connect } from 'react-redux';
import App from '../app';

function mapStoreToProps(store) {
    return {
        // employees: store.app.employees
    }
}

export default connect(mapStoreToProps)(App);