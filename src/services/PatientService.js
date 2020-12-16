import axios from 'axios';

const PATIENT_API_BASE_URL = "http://hospitalrestapi.herokuapp.com/api/v1/patients";

class PatientService {

    getPatients(){
        return axios.get(PATIENT_API_BASE_URL);
    }
n
    createPatient(patient){
        return axios.post(PATIENT_API_BASE_URL, patient);
    }

    getPatientById(patientID){
        return axios.get(PATIENT_API_BASE_URL + '/' + patientID);
    }

    updatePatient(patient, patientID){
        return axios.put(PATIENT_API_BASE_URL + '/' + patientID, patient);
    }

    deletePatient(patientID){
        return axios.delete(PATIENT_API_BASE_URL + '/' + patientID);
    }
}

export default new PatientService()