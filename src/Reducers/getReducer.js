import {POST_DATA,EDIT,DELETE,GET} from '../Actions/Types';

const initialState = {
    getusers:[],
    loading:true
}

export default function(state = initialState, action){

    switch(action.type){

        case GET:
        return {
            ...state,
            getusers:action.payload,
            loading:false

        }

        case POST_DATA:
            return {
                ...state,
                getusers: [...state.getusers, action.payload],
                loading:false
    
            }


            case EDIT:
                return {
                    ...state,
                     users:[...state.getusers],
                    loading:false
        
                }

        
        default: return state
    }

}

