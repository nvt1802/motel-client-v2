import * as actionTypes from './actionTypes'

export const initProvince = (province) => {
    return {
        type: actionTypes.PROVINCE_API_CALL_SUCCESS,
        payload: province
    }
}