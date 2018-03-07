/*
* Login actions creators 
*/
import {
    USERS_LIST_REQUEST,
    USERS_LIST_SUCCESS,
    USERS_LIST_FAILURE,
} from '../constants/actionsConstants';
import {API_URL} from '../constants/apiConstants'
import {actionDispatcher} from '../util/payloadUtility'

export const getData = () => {
    return  (dispatch) => {
        dispatch(actionDispatcher(USERS_LIST_REQUEST));
        fetch(API_URL,{method:'GET'})
            .then((response) => response.json())
            .then(data => dispatch(actionDispatcher(USERS_LIST_SUCCESS, data)))
            .catch((err) =>{
                dispatch(actionDispatcher(USERS_LIST_FAILURE));
            })
    };
}


