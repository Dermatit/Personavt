import { SVG_HANDLER, URL_HANDLER, CURRENT_TYPE_HANDLER } from "./types.jsx";

export const svgHandlerAction = (SVG) => {
    return {
        type: SVG_HANDLER,
        payload: SVG
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