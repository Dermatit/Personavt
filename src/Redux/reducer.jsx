import { combineReducers } from 'redux';
import { SVG_HANDLER, URL_HANDLER, CURRENT_TYPE_HANDLER } from "./types.jsx";

const initialState = {
    defaultURL: '',
    defaultSVG: 'none',
    defaultCurrentType: 'defaultCurrentType'
}

export const svgHandler = (state = initialState.defaultSVG, action) => {
    switch (action.type) {
        case SVG_HANDLER: return action.payload;
        default: return state;
    }
}
export const urlHandler = (state = initialState.defaultURL, action) => {
    switch (action.type) {
        case URL_HANDLER: return action.payload;
        default: return state;
    }
}
export const currentTypeHandler = (state = initialState.defaultCurrentType, action) => {
    switch (action.type) {
        case CURRENT_TYPE_HANDLER: return action.payload;
        default: return state;
    }
}

export const rootReducer = combineReducers({ svgHandler, urlHandler, currentTypeHandler });