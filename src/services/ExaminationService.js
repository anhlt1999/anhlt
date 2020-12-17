import axios from 'axios';

const EXAMINATION_API_BASE_URL = "https://hospitalrestapi.herokuapp.com/api/v1/examinations";

class ExaminationService {

    getExaminations(){
        return axios.get(EXAMINATION_API_BASE_URL);
    }
n
    createExaminations(examination){
        return axios.post(EXAMINATION_API_BASE_URL, examination);
    }

    getExaminationById(examinationID){
        return axios.get(EXAMINATION_API_BASE_URL + '/' + examinationID);
    }

    updateExamination(examinations, examinationID){
        return axios.put(EXAMINATION_API_BASE_URL + '/' + examinationID, examination);
    }

    deleteExamination(examinationID){
        return axios.delete(EXAMINATION_API_BASE_URL + '/' + examinationID);
    }
}

export default new ExaminationService()