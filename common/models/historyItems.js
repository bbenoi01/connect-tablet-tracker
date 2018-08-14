'use strict';

module.exports = function(HistoryItem) {
    HistoryItem.disableRemoteMethod('delete', true);
};
