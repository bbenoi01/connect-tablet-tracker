import { connect } from 'react-redux';
import History from './History';

function mapStoreToProps(store) {
    return {
        historyItems: store.checkout.historyItems
    };
}

export default connect(mapStoreToProps)(History);