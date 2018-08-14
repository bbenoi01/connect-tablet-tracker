import { connect } from 'react-redux';
import History from '../components/history';

function mapStoreToProps(store) {
    return {
        historyItems: store.app.historyItems
    };
}

export default connect(mapStoreToProps)(History);