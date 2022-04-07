import { URL_HANDLER, CURRENT_TYPE_HANDLER, ALL_CLEAR, DOWNLOAD_REF } from "./types.jsx";

export const allClearAction = (key) => {
    return {
        type: ALL_CLEAR,
        payload: key
    }
}

export const urlHandlerAction = (URL) => {
    return {
        type: URL_HANDLER,
        payload: URL
    }
}

export const currentTypeHandlerAction = (currentType) => {
    return {
        type: CURRENT_TYPE_HANDLER,
        payload: currentType
    }
}

export const downloadRefHandlerAction = (stageRef) => {
    return {
        type: DOWNLOAD_REF,
        payload: stageRef
    }
}