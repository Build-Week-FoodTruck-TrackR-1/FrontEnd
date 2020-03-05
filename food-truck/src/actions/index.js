import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';
// import { currentOperatorTest } from "../testdata";

export const ADD_OPERATOR_START = "ADD_OPERATOR_START";
export const ADD_OPERATOR_SUCCESS= "ADD_OPERATOR_SUCCESS";
export const ADD_OPERATOR_FAIL = "ADD_OPERATOR_FAIL";
export const ADD_DINER_START = "ADD_DINER_START";
export const ADD_DINER_SUCCESS = "ADD_DINER_SUCCESS";
export const ADD_DINER_FAIL = "ADD_DINER_FAIL";
export const EDIT_TRUCK_START = "EDIT_TRUCK_START";
export const EDIT_TRUCK_SUCCESS = "EDIT_TRUCK_SUCCESS";
export const EDIT_TRUCK_FAIL = "EDIT_TRUCK_FAIL";
export const EDIT_MENU_ITEM_START = "EDIT_MENU_ITEM_START";
export const EDIT_MENU_ITEM_SUCCESS = "EDIT_MENU_ITEM_SUCCESS";
export const EDIT_MENU_ITEM_FAIL = "EDIT_MENU_ITEM_FAIL";
export const ADD_REVIEW = "ADD_REVIEW";
export const OPERATOR_LOGIN_START = "OPERATOR_LOGIN_START";
export const OPERATOR_LOGIN_SUCCESS = "OPERATOR_LOGIN_SUCCESS";
export const OPERATOR_LOGIN_FAIL = "OPERATOR_LOGIN_FAIL";
export const DINER_LOGIN_START = "DINER_LOGIN_START";
export const DINER_LOGIN_SUCCESS = "DINER_LOGIN_SUCCESS";
export const DINER_LOGIN_FAIL = "DINER_LOGIN_FAIL";
export const REMEMBER_STATE_ON_REFRESH = "REMEMBER_STATE_ON_REFRESH";
export const ADD_MENU_ITEM =" ADD_MENU_ITEM";
export const DELETE_TRUCK_START = "DELETE_TRUCK_START";
export const DELETE_TRUCK_SUCCESS = "DELETE_TRUCK_SUCCESS";
export const DELETE_TRUCK_FAIL = "DELETE_TRUCK_FAIL";
export const SIGN_OUT = "SIGN_OUT";
export const CHANGE_FAVORITE = "CHANGE_FAVORITE";
export const EDIT_DINER_INFORMATION_START = "EDIT_DINER_INFORMATION_START";
export const EDIT_DINER_INFORMATION_SUCCESS = "EDIT_DINER_INFORMATION_SUCCESS";
export const EDIT_DINER_INFORMATION_FAIL = "EDIT_DINER_INFORMATION_FAIL";
export const EDIT_OPERATOR_INFORMATION_START = "EDIT_OPERATOR_INFORMATION_START";
export const EDIT_OPERATOR_INFORMATION_SUCCESS = "EDIT_OPERATOR_INFORMATION_SUCCESS";
export const EDIT_OPERATOR_INFORMATION_FAIL = "EDIT_OPERATOR_INFORMATION_FAIL";



export const rememberStateOnRefresh = state => {

    

    return {

        type: REMEMBER_STATE_ON_REFRESH,
        payload: state
    };
}

export const addOperator = formData => dispatch => {
  dispatch({ type: ADD_OPERATOR_START})
  axiosWithAuth()
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

export const addDiner = formData => dispatch => {
    dispatch({ type: ADD_DINER_START})
    axiosWithAuth()
    .post('/auth/register/diners', formData)
    .then(res => {
        dispatch({
            type: ADD_DINER_SUCCESS,
            payload: res.data
        })
    })
    .catch(err => {
        dispatch({
            type: ADD_DINER_FAIL, 
            payload: err
        })
    })
      console.log(formData);
    
};

export const deleteTruck = id => dispatch => {
    dispatch({ type: DELETE_TRUCK_START})
    axiosWithAuth()
    .delete('/operator/2/truck/3', id)
    .then(res => {
        dispatch({
            type: DELETE_TRUCK_SUCCESS, payload:res.data
        })
        .catch(err => ({
            type: DELETE_TRUCK_FAIL, payload: err
        }))
    })

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

// export const addReview = formData => {
//     return {
//         type: ADD_REVIEW,
//         payload: formData
//     }
// }

// export const changeFavorite = data => {

//     return{
//         type: CHANGE_FAVORITE,
//         payload: data
//     }
// }

export const signOut = _ => {

    return{
        type: SIGN_OUT
    }
}

export const loginDiner = data => dispatch => {
    dispatch({ type: DINER_LOGIN_START})
    axiosWithAuth()
    .post('/api/accounts/diners', data)
    .then(res => {
        dispatch({
            type: DINER_LOGIN_SUCCESS,
            payload: res.data
        })
    })
    .catch(err => {
        dispatch({
            type: DINER_LOGIN_FAIL, 
            payload: err
        })
    })
      console.log(data);
  

        }

        export const loginOperator = data => dispatch => {
            dispatch({ type: OPERATOR_LOGIN_START})
            axiosWithAuth()
            .post('/auth/login/operators', data)
            .then(res => {
                dispatch({
                    type: OPERATOR_LOGIN_SUCCESS,
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({
                    type: OPERATOR_LOGIN_FAIL, 
                    payload: err
                })
            })
              console.log(data);
          
            
            
                }