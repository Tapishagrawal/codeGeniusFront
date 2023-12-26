import axios from "axios";
import { INTERVIEW_END_POST_REQUEST, INTERVIEW_FAILIURE, INTERVIEW_GET_DATA_REQUEST, INTERVIEW_REQUEST, INTERVIEW_START_POST_REQUEST, INTERVIEW_UPDATE_PATCH_REQUEST } from "../actionType";


const URL = "https://codegenius-66xv.onrender.com";

export const interviewStartPost = (type) => async (dispatch) => {
    try {
        dispatch({ type: INTERVIEW_REQUEST });
        let res = await axios.post(`${URL}/interview/start`, { type });
        dispatch({
            type: INTERVIEW_START_POST_REQUEST,
            payload: { message: res.data.message, data: res.data.data, newQue: res.data.newQue }
        });
    } catch (error) {
        dispatch({ type: INTERVIEW_FAILIURE });
        console.log(error);
    }
};

export const interviewUpdatePatch = (id, conversation) => async (dispatch) => {
    try {
        dispatch({ type: INTERVIEW_REQUEST });
        let res = await axios.patch(`${URL}/interview/update/${id}`, { conversation });
        dispatch({
            type: INTERVIEW_UPDATE_PATCH_REQUEST,
            payload: { success: res.data.success, data: res.data.data, newQue: res.data.newQue }
        });
    } catch (error) {
        dispatch({ type: INTERVIEW_FAILIURE });
        console.log(error);
    }
};


export const interviewGetData = (id) => async (dispatch) => {
    try {
        dispatch({ type: INTERVIEW_REQUEST });
        let res = await axios.get(`${URL}/interview/get/${id}`);
        dispatch({
            type: INTERVIEW_GET_DATA_REQUEST,
            payload: { success: res.data.success, message: res.data.message, data: res.data.data }
        });
    } catch (error) {
        dispatch({ type: INTERVIEW_FAILIURE });
        console.log(error);
    }
};

export const interviewEndPost = (id, conversation) => async (dispatch) => {

    try {
        dispatch({ type: INTERVIEW_REQUEST });
        let res = await axios.post(`${URL}/interview/end/${id}`, { conversation });
        dispatch({
            type: INTERVIEW_END_POST_REQUEST,
            payload: { success: res.data.success, data: res.data.data }
        });
    } catch (error) {
        dispatch({ type: INTERVIEW_FAILIURE });
        console.log(error);
    }
};
