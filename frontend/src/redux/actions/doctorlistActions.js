import * as actionTypes from "../constants/doctorlistConstants";
import axios from "axios";

export const getDoctorlists = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_DOCTORLISTS_REQUEST });

    const { data } = await axios.get("/api/doctorlist");

    dispatch({
      type: actionTypes.GET_DOCTORLISTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_DOCTORLISTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getDoctorlistDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_DOCTORLIST_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/doctorlist/${id}`);

    dispatch({
      type: actionTypes.GET_DOCTORLIST_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_DOCTORLIST_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const removeProductDetails = () => (dispatch) => {
  dispatch({ type: actionTypes.GET_DOCTORLIST_DETAILS_RESET });
};
