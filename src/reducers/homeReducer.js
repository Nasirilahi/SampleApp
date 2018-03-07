import {
    USERS_LIST_REQUEST,
    USERS_LIST_SUCCESS,
    USERS_LIST_FAILURE,
} from '../constants/actionsConstants';

const initialState = {
    data :[],
    isLoading:true,
};

export default function authReducer(state=initialState , action){
    switch (action.type) {
        case USERS_LIST_REQUEST:
            return {...state, isLoading: true};

        case USERS_LIST_SUCCESS:
            return {...state, data: action.data, isLoading: false};

        case USERS_LIST_FAILURE:
            return {...state, data:[], isLoading: false};
        default:
            return state ;
    }
}
