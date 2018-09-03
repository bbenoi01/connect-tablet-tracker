import { connect } from 'react-redux';
import AddReps from './AddReps';

function mapStoreToProps(store) {
    return {
        firstName: store.addReps.firstName,
        lastName: store.addReps.lastName
    }
}

export default connect(mapStoreToProps)(AddReps);