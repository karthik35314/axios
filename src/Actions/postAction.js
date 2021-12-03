import { POST_DATA,EDIT,DELETE,GET } from "./Types";
import axios from "axios";


export const postData = (data) => async dispatch => {
    
    try{
        const res = await axios.post(`https://petstore.swagger.io/v2/pet`,data);
        
        if(res.status===200){
             dispatch(getData()) 
        }
        
        dispatch( {
            type: POST_DATA,
            payload: res.data
        })
        console.log(res.data,"rrrr")
    
    }
    catch(error){
        console.log(error);
    }

}

//https://petstore.swagger.io/v2/pet/findByStatus?status=pending

export const getData = (data) => async dispatch => {
    
    try{
        const res = await axios.get(`https://petstore.swagger.io/v2/pet/findByStatus?status=${data}`)
        dispatch( {
            type: GET,
            payload: res.data
        })
        console.log(res.data,"get")
    }
    catch(error){
        console.log(error);
    }

}



export const putData = (data) => async dispatch => {
    
    try{
        const res = await axios.put(`https://petstore.swagger.io/v2/pet`,data)
        if(res.status===200){
            dispatch(getData()) 
       }
        dispatch( {
            type: EDIT,
            payload: res.data
        })
        console.log(res.data,"getdata")
    }
    catch(error){
        console.log(error);
    }

}





export const deleteData = (data) => async dispatch => {
    
    try{
        const res = await axios.delete(`https://petstore.swagger.io/v2/pet/${data.id}`).catch((err)=>{console.log(err,"apidel")})
        if(res.status===200){
            dispatch(getData()) 
       }
        dispatch( {
            type: DELETE,
            payload: res.data
        })
        console.log(res.data,"del")
    }
    catch(error){
        console.log(error);
    }

}
