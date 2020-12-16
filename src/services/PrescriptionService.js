import axios from 'axios';

const PRESCRIPTION_API_BASE_URL = "https://hospitalrestapi.herokuapp.com/api/v1/prescriptions";

class PrescriptionService {

    getPrescriptions(){
        return axios.get(PRESCRIPTION_API_BASE_URL);
    }
n
    createPrescriptions(prescription){
        return axios.post(PRESCRIPTION_API_BASE_URL, prescription);
    }

    getPrescriptionById(prescriptionID){
        return axios.get(PRESCRIPTION_API_BASE_URL + '/' + prescriptionID);
    }

    updatePrescription(prescription, prescriptionID){
        return axios.put(PRESCRIPTION_API_BASE_URL + '/' + prescriptionID, prescription);
    }

    deletePrescription(prescriptionID){
        return axios.delete(PRESCRIPTION_API_BASE_URL + '/' + prescriptionID);
    }
}

export default new PrescriptionService()