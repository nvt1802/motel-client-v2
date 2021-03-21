import Axios from "axios"
// import { API_URL } from "../common/Constant"
const BASE_URL = 'https://vapi.vnappmob.com'

class ProvinceAPI {
    findAll() {
        return Axios.get(`${BASE_URL}/api/province`)
    }
}

export default new ProvinceAPI()