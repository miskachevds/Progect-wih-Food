import { API_URL } from "./config";

const getAllCategories = async () => {
    const response = await fetch(API_URL + 'categories');
    return await response.json();
}

const getOllCategories = async () => {
    const response = await fetch(API_URL + 'ollCategories');
    return await response.json();
}

const getfiltredCategories = async () => {
    const response = await fetch(API_URL + 'filtredCategories');
    return await response.json();
}

export {getAllCategories,getOllCategories,getfiltredCategories};