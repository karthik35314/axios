import {POST,EDIT,DELETE} from '../Actions/Types';

const initialState = {
    users:[],
    loading:true
}

export default function(state = initialState, action){

    switch(action.type){

        case POST:
        return {
            ...state,
            users:action.payload,
            loading:false

        }
        
        default: return state
    }

}

