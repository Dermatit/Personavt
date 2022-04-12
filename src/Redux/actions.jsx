import { IMAGE_INFO, DOWNLOAD_STAGE } from "./types.jsx";

let currentTypeStore = '';

export const imageInfoAction = (currentUrl, currentType) => {
    currentType !== undefined && (currentTypeStore = currentType); 
    return {
        type: IMAGE_INFO,
        currentUrl: currentUrl,
        currentType: currentTypeStore
    }
}

export const downloadStageAction = (downloadStage) => {
    return {
        type: DOWNLOAD_STAGE,
        downloadStage: downloadStage,
    }
}