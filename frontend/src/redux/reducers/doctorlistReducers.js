import * as actionTypes from "../constants/doctorlistConstants";

export const getDoctorlistsReducer = (state = { doctorlists: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_DOCTORLISTS_REQUEST:
      return {
        loading: true,
        doctorlists: [],
      };
    case actionTypes.GET_DOCTORLISTS_SUCCESS:
      return {
        doctorlists: action.payload,
        loading: false,
      };
    case actionTypes.GET_DOCTORLISTS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getDoctorlistDetailsReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case actionTypes.GET_DOCTORLIST_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.GET_DOCTORLIST_DETAILS_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };
    case actionTypes.GET_DOCTORLIST_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.GET_DOCTORLIST_DETAILS_RESET:
      return {
        product: {},
      };
    default:
      return state;
  }
};
