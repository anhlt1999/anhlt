import axios from 'axios';

const NURSE_API_BASE_URL = "https://hospitalrestapi.herokuapp.com/api/v1/nurses";

class NurseService {

    getNurses(){
        return axios.get(NURSE_API_BASE_URL);
    }
n
    createNurse(nurse){
        return axios.post(NURSE_API_BASE_URL, nurse);
    }

    getNurseById(nurseId){
        return axios.get(NURSE_API_BASE_URL + '/' + nurseId);
    }

    updateNurse(nurse, nurseId){
        return axios.put(NURSE_API_BASE_URL + '/' + nurseId, nurse);
    }

    deleteNurse(nurseId){
        return axios.delete(NURSE_API_BASE_URL + '/' + nurseId);
    }
}

export default new NurseService()