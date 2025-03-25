import { API_URL } from "./config";

const getAllPhotos = async () => {
    const response = await fetch(API_URL + 'photos');
    return await response.json();
}

const getOnlyPhoto = async () => {
    const response = await fetch(API_URL + 'photos');
    return await response.json();
}

const getFiltredPhoto = async () => {
    const response = await fetch(API_URL + 'photos');
    return await response.json();
}

export {getAllPhotos,getOnlyPhoto,getFiltredPhoto};