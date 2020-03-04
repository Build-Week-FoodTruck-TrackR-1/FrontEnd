import Axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';
// import { currentOperatorTest } from "../testdata";

export const ADD_OPERATOR_START = "ADD_OPERATOR_START";
export const ADD_OPERATOR_SUCCESS= "ADD_OPERATOR_SUCCESS";
export const ADD_OPERATOR_FAIL = "ADD_OPERATOR_FAIL";
export const ADD_DINER = "ADD_DINER";
export const EDIT_TRUCK = "EDIT_TRUCK";
export const EDIT_MENU_ITEM = "EDIT_MENU_ITEM";
export const ADD_REVIEW = "ADD_REVIEW";
export const OPERATOR_LOGIN = "OPERATOR_LOGIN";
export const DINER_LOGIN = "DINER_LOGIN";
export const REMEMBER_STATE_ON_REFRESH = "REMEMBER_STATE_ON_REFRESH";
export const ADD_MENU_ITEM =" ADD_MENU_ITEM";
export const DELETE_TRUCK = "DELETE_TRUCK";
export const SIGN_OUT = "SIGN_OUT";
export const CHANGE_FAVORITE = "CHANGE_FAVORITE";
export const EDIT_DINER_INFORMATION = "EDIT_DINER_INFORMATION";
export const EDIT_OPERATOR_INFORMATION = "EDIT_OPERATOR_INFORMATION";



export const rememberStateOnRefresh = state => {

    

    return {

        type: REMEMBER_STATE_ON_REFRESH,
        payload: state
    };
}

export const addOperator = formData => dispatch => {
  dispatch({ type: ADD_OPERATOR_START})
  axiosWithAuth
  .post('/auth/register/operators', formData)
  .then(res => {
      dispatch({
          type: ADD_OPERATOR_SUCCESS,
          payload: res.data
      })
  })
  .catch(err => {
      dispatch({
          type: ADD_OPERATOR_FAIL, 
          payload: err
      })
  })
    console.log(formData);

};

export const addDiner = formData => {

    
};

export const deleteTruck = id => {

    return {

        type: DELETE_TRUCK,
        payload: id
    }
}

export const editTruck = formData => {

    console.log(formData);

    return {
        type: EDIT_TRUCK,
        payload: formData
    }
}

export const editMenuItem = formData => {

    console.log(formData);

    return {
        type: EDIT_MENU_ITEM,
        payload: formData
    }
}

export const editUserInformation = formData => {

    if(JSON.parse(localStorage.getItem('role')) === 'Diner'){

        return {
            type: EDIT_DINER_INFORMATION,
            payload: formData
        }
    }
    else{

        return{
            type: EDIT_OPERATOR_INFORMATION,
            payload: formData
        }
    }
}

export const addMenuItem = formData => {

    return {
        type: ADD_MENU_ITEM,
        payload: formData
    }
}

export const addReview = formData => {

    return {
        type: ADD_REVIEW,
        payload: formData
    }
}

export const changeFavorite = data => {

    return{
        type: CHANGE_FAVORITE,
        payload: data
    }
}

export const signOut = _ => {

    return{
        type: SIGN_OUT
    }
}

export const login = data => {

    
    
        }