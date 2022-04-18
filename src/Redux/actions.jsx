import { GET_SVG, DOWNLOAD_STAGE } from "./types.jsx";


export const getSvgAction = (svg, currentType) => {
    return {
        type: GET_SVG,
        svg: svg,
        currentType: currentType,
    }
}

export const downloadStageAction = (downloadStage) => {
    return {
        type: DOWNLOAD_STAGE,
        downloadStage: downloadStage,
    }
}