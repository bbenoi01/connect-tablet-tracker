import { types } from './whatActions';

const INITIAL_STATE = {
    device: ''
};

export default function WhatReducer(state = INITIAL_STATE, action) {
    const { type, payload } = action;
    var timestamp = Date.now();
    var nd = new Date(timestamp);
    var month = nd.getMonth() + 1;
    var day = nd.getDate();
    var year = nd.getFullYear();
    var hrs = nd.getHours();
    var min = nd.getMinutes();
    var sec = nd.getSeconds();
    var date = month + '/' + day + '/' + year;

    if (hrs < 10) {
        hrs = '0' + hrs;
    }

    if (min < 10) {
        min = '0' + min;
    }

    if (sec < 10) {
        sec = '0' + sec;
    }

    var time = hrs + ':' + min;

    switch (type) {
        case (types.UPDATE_WHAT): {
            return {
                ...state,
                device: payload,
                timestamp: timestamp,
                date: date,
                time: time
            }
        }
        default: return state;
    }
};