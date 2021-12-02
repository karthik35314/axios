import React,{useState,useEffect} from 'react';
import './App.css';
import {useDispatch,useSelector} from "react-redux";
import { postData } from './Actions/postAction';
function App() {
const dispatch=useDispatch();
const Users = useSelector((state) => state.allUsers.Users);


  const initialDataState = () => {
    return {name: '', category: '',tag:'',status:''};
  } 
  const [data, setData] = useState(initialDataState);
const inputChange =e=>{
  e.preventDefault();
const { name, value } = e.target;
setData({...data,[name]:value})
console.log(data)
}
const postpet=()=> dispatch(postData(data))

  return (
    <div className="App">
  <label>name</label>     <input type="text" name="name" value={data.name} onChange={inputChange} />
  <label>category</label>  <input type="text" name="category" value={data.category} onChange={inputChange} />
  <label>tag</label>       <input type="text" name="tag" value={data.tag} onChange={inputChange} />
  <h1>status</h1>
  <label>available</label>  <input type="checkbox"  name="status" value="available" onClick={inputChange} />
  <label>pending</label>    <input type="checkbox" name="status" value="pending" onClick={inputChange} />
  <label>sold</label>       <input type="checkbox" name="status" value="sold" onClick={inputChange} />
   <button onClick={postpet}>post</button>
    </div>
  );
}

export default App;
