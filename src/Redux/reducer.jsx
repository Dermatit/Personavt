import { combineReducers } from "redux";
import { IMAGE_INFO, DOWNLOAD_STAGE } from "./types.jsx";

const initialState = {
    currentType : '',
    currentUrl : '',
}

const constructorReducer = (state = initialState, action) => {
    switch (action.type) {
        case IMAGE_INFO : return {
            currentType : action.currentType,
            currentUrl : action.currentUrl
        };
        default: return state;
    }
}

const triviaReducer = (state = '', action) => {
    switch (action.type) {
        case DOWNLOAD_STAGE : return {
            downloadStage : action.downloadStage
        };
        default: return state;
    }
}

export const rootReducer = combineReducers({triviaReducer, constructorReducer});