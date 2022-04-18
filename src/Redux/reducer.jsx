import { GET_SVG, DOWNLOAD_STAGE } from "./types.jsx";

const initialState = {
    svg : '',
    currentType : '',
    downloadStage : ''
}

const constructorReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SVG : 
            action.currentType == undefined && (action.currentType = state.currentType);
            return {
                ...state,
                svg : action.svg,
                currentType : action.currentType,
            }
        case DOWNLOAD_STAGE : 
            return {
                ...state,
                downloadStage : action.downloadStage
            }
        default: return state;
    }
}


export const rootReducer = constructorReducer;