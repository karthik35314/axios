import { POST,EDIT,DELETE } from "./Types";
import axios from "axios";


export const postData = (data) => async dispatch => {
    
    try{
        const res = await axios.post(`https://petstore.swagger.io/v2/pet`,data)
        dispatch( {
            type: POST,
            payload: res.data
        })
    }
    catch(error){
        console.log(error);
    }

}



export const putData = (data) =>{

    return ({
 
    type: EDIT,
    payload:data,
    
});
}


export const deleteData = (data) => ({
    
    type: DELETE,
    payload:data,
    
});