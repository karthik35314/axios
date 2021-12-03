import React, { useState, useEffect } from 'react';
import "./App.css"
import { useDispatch, useSelector } from 'react-redux';
import { putData, getData } from './Actions/postAction';


const Modal = ({ show, toggleModal, user }) => {
    const dispatch = useDispatch();

    const Users = useSelector((state) => state.getusers.getusers);



    const [data, setData] = useState(user);
    console.log(data,"new");

    const putPet = () => {
        var req = {
            "id": user.id,
            "category": {
                "id": 0,
                "name": data.category
            },
            "name": data.name,
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
        dispatch(putData(req))
        // setData(null)
        dispatch(getData("available"))


    }


    const inputChange = e => {
        // debugger                                                                            
        const { name, value } = e.target;
        setData({ ...data, [name]: value })

        // console.log(e.target.value)

    }


    useEffect(() => {
        dispatch(getData("available"))
    }, [])                                                                                                                                                      



    const submitData = event => {
        putPet()
        toggleModal()
    }

    const cancel = () => {
        toggleModal()

    }

    return (
        show ? (
            <div className="modal-overlay">
                <div className='modal'>

                    <h3>edit details</h3>
                    <div className="modal-section">


                        <label>name</label>     <input type="text" name="name" value={data?.name} onChange={inputChange} />

                    </div>
                    <div className="modal-section">
                        <label>category</label>  <input type="text" name="category" value={data?.category.name} onChange={inputChange} />

                    </div>
                    <div className="modal-section">

                        <label>tag</label>  <input type="text" name="tags" value={data?.tags} onChange={inputChange} />

                    </div>


                    <div className="modal-section">

                        <h1>status</h1>
                        <label>available</label>  <input type="checkbox" name="status" value="available" checked={"available" === data?.status} onClick={() => setData((pdata) => ({ ...pdata, status: "available" }))} />
                        <label>pending</label>    <input type="checkbox" name="status" value="pending" checked={"pending" === data?.status} onClick={() => setData((pdata) => ({ ...pdata, status: "pending" }))} />
                        <label>sold</label>       <input type="checkbox" name="status" value="sold" checked={"sold" === data?.status} onClick={() => setData((pdata) => ({ ...pdata, status: "sold" }))} />

                    </div>

                    <button type="button" onClick={cancel}>cancel</button>
                    <button onClick={submitData}>submit</button>


                </div>
            </div>
        ) : null
    );
}

export default Modal;