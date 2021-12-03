import {POST,EDIT,DELETE,GET} from '../Actions/Types';

const initialState = {
    deluser:[],
    loading:true
}

export default function(state = initialState, action){

    switch(action.type){

        

        case DELETE:
            return {
                ...state,
                deluser:action.payload,
                loading:false
    
            }
        
        
        default: return state
    }

}

