import { combineReducers } from 'redux';
import { URL_HANDLER, CURRENT_TYPE_HANDLER, ALL_CLEAR, DOWNLOAD_REF } from "./types.jsx";

const initialState = {
    default: ''
}

export const allClearHandler = (state = initialState.default, action) => {
    switch (action.type) {
        case ALL_CLEAR: return action.payload;
        default: return state;
    }
}
export const urlHandler = (state = initialState.default, action) => {
    switch (action.type) {
        case URL_HANDLER: return action.payload;
        default: return state;
    }
}
export const currentTypeHandler = (state = initialState.default, action) => {
    switch (action.type) {
        case CURRENT_TYPE_HANDLER: return action.payload;
        default: return state;
    }
}

export const dowloadRefHandler = (state = initialState.default, action) => {
    switch (action.type) {
        case DOWNLOAD_REF: return action.payload;
        default: return state;
    }
}

export const rootReducer = combineReducers({ urlHandler, currentTypeHandler, allClearHandler, dowloadRefHandler});