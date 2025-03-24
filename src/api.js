import { API_URL } from "./config";

const getAllVacancies = async () => {
    const response = await fetch(API_URL + 'vacancies');
    return await response.json();
}

// GET /api/v1/vacancies?region_id=16
const getRegionVacancies = async (idRegion) => {
    const response = await fetch(API_URL + 'vacancies?region_id=' + idRegion);
    return await response.json();
}

// http://opendata.trudvsem.ru/api/v1/vacancies?text=инженер по тестированию
const getFiltredVacancies = async (vacanciName) => {
    const response = await fetch(API_URL + 'vacancies?text=' + vacanciName);
    return await response.json();
}

export { getAllVacancies, getRegionVacancies, getFiltredVacancies};