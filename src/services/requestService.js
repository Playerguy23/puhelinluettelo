import axios from 'axios';
const baseUrl = '/api/persons';

const getAllPersons = () => {
    return axios.get(baseUrl);
}

const createPerson = (newObject) => {
    return axios.post(baseUrl, newObject);
}

const deletePerson = (id, object) => {
    return axios.delete(`${baseUrl}/${id}`, object);
}

export default {
    getAllPersons: getAllPersons,
    createPerson: createPerson,
    deletePerson: deletePerson
}