import React, { useState, useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { postData, getData, putData, deleteData } from './Actions/postAction';
import Modal from './modal';
function App() {
  const dispatch = useDispatch();
  const Users = useSelector((state) => state.getusers.getusers);
  const [filtercheck, setfiltercheck] = useState("")
  const [showModal, setShowModal] = useState(false);
  const [sendData, setsendData] = useState(null)
  const toggleModal = () => {
    setShowModal(!showModal);
    console.log(showModal,"modal")
  }


  console.log(Users, "hah")


console.log(sendData,"senddata");
  const [data, setData] = useState({ name: '', category: '', tags: '', status: '' });

  const postpet = () => {
    var req = {
      "id": Math.floor((Math.random() * 100) + 1),
      "category": {
        "id": 0,
        "name": data.category
      },
      "name": data.category,
      "photoUrls": [
        "string"
      ],
      "tags": [
        {
          "id": 0,
          "name": data.tags
        }
      ],
      "status": data.status
    }
    dispatch(postData(req))
    dispatch(getData("available"))


  }
  const deletePet = (user) => {
    console.log(user, "del");
    dispatch(deleteData(user))
    dispatch(getData(user.status))

  }

  const putPet = (user) => {
 
    setsendData(user)
    toggleModal()
  }

  const inputChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    setData({ ...data, [name]: value })

    console.log(data)

  }
  const filterfunc = (e) => {

    e.preventDefault();
    setfiltercheck(e.target.value)
    // console.log(e.target.value, "fun")
    dispatch(getData(e.target.value))
  }


  useEffect(() => {
    dispatch(getData("available"))
  }, [])


  return (

    <div className="App">
         
      <label>name</label>     <input type="text" name="name" value={data.name} onChange={inputChange} />
      <label>category</label>  <input type="text" name="category" value={data.category} onChange={inputChange} />
      <label>tag</label>       <input type="text" name="tags" value={data.tags} onChange={inputChange} />
      <h1>status</h1>
      <label>available</label>  <input type="checkbox" name="status" value="available" checked={"available" === data.status} onClick={() => setData((pdata) => ({ ...pdata, status: "available" }))} />
      <label>pending</label>    <input type="checkbox" name="status" value="pending" checked={"pending" === data.status} onClick={() => setData((pdata) => ({ ...pdata, status: "pending" }))} />
      <label>sold</label>       <input type="checkbox" name="status" value="sold" checked={"sold" === data.status} onClick={() => setData((pdata) => ({ ...pdata, status: "sold" }))} />


      <button onClick={postpet}>post</button>
    


      <div>
        <h1>pet details</h1>
        <label>available</label>  <input type="checkbox" name="filterone" value="available" checked={"available" === filtercheck} onClick={(e) => filterfunc(e)} />
        <label>pending</label>    <input type="checkbox" name="filtertwo" value="pending" checked={"pending" === filtercheck} onClick={(e) => filterfunc(e)} />
        <label>sold</label>  <input type="checkbox" name="filtertwo" value="sold" checked={"sold" === filtercheck} onClick={(e) => filterfunc(e)} />


      </div>

      <div>
        {


          Users ?
            Users?.map((user) => {
              return (<div>



                <table>
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>status</th>
                      <th>category</th>
                    </tr>
                  </thead>
                  <tbody>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.status}</td>
                    <td>{user.id}</td>
                    <td> <button onClick={() => deletePet(user)}>delete</button>  </td>
                    <td><button onClick={() => putPet(user)} >update</button></td>
                  </tbody>
                </table>

              </div>)
            }) : "no users"

        }
      </div>
    <Modal show={showModal} user={sendData} toggleModal={toggleModal}/>
    </div>


  );
}

export default App;

  // const initialDataState = () => {
  //   return {
  //     "id": 0,
  //     "category": {
  //       "id": 0,
  //       "name": ""
  //     },
  //     "name": "",
  //     "photoUrls": [
  //       "string"
  //     ],
  //     "tags": [
  //       {
  //         "id": 0,
  //         "name": ""
  //       }
  //     ],
  //     "status": ""
  //   }                                      //{name: '', category: '',tag:'',status:''};
  // } 
