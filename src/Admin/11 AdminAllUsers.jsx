import React, { useEffect, useState } from 'react';
import { MDBCard, MDBCardBody, MDBRow, MDBCol, MDBCardHeader, MDBIcon } from 'mdbreact';
import { Link } from 'react-router-dom';

const AdminAllUsers = () => {
    const [formData, setFormData] = useState({});
    const [data, setData] = useState({});
    const [loadingStatus, setLoadingStatus] = useState(false);
    const [deleteStatus, setDeleteStatus] = useState(false);
    const [userDataById, setUserDataById] = useState({});

    useEffect(() => {
        fetch("https://justjayapi.000webhostapp.com/allusers").then(response => response.json()).then((result) => {
            console.log(result);
            setData(result.Data)
            setLoadingStatus(true)
        })
    }, [deleteStatus])

    let editdata = (event) => { 
        console.log(event.target);
        
        let id = event.target.dataset.tag;
        // console.log(tag); // should return Tagvalue
        fetch(`https://justjayapi.000webhostapp.com/userdatabyidgetmethod?id=${id}`).then(response => response.json()).then((result) => {
            console.log(result.Data[0]);
            console.log(event.target);
            console.log(event.target.dataset.tag);
            // setUserDataById(result.Data[0])
            setFormData(result.Data[0])
        })
    }
    
    let updatedata = (event) => { 
        console.log("update data")
        console.log(event.target.value)
        
        let id = event.target.dataset.tag;
        console.log("id for update",id);
        fetch(`https://justjayapi.000webhostapp.com/updateusergetmethod?id=${id}`).then(response => response.json()).then((result) => {
              // setData(result.Data)
              // setLoadingStatus(true)
              // setFormData(result.Data[0])
             console.log(result);
            
        })

    }
    
    let deletedata = (event) => { console.log("deletedata",event); 
        console.log(event.target.value);
        fetch(`https://justjayapi.000webhostapp.com/deleteusergetmethod?id=${event.target.value}`).then(response => response.json()).then((result) => {
            console.log(result);
            setData(result.Data)
            setDeleteStatus(true)
        })
    }
    
    return (
        <>
            <MDBRow className="mb-4">
                <MDBCol md="12">
                    <MDBCard>
                        <MDBCardHeader>
                            <MDBRow end>
                                <MDBCol md="2">
                                    <Link className='btn btn-sm btn-primary' to="/admin/addnewuser">Add new</Link>
                                </MDBCol>
                            </MDBRow>
                        </MDBCardHeader>

                        <MDBCardBody>
                            <MDBRow>
                                

                                <MDBCol md="2">
                                    <input placeholder='USERNAME' type="text" onChange={(event) => setFormData({ ...formData, [event.target.name]: event.target.value })} value={formData.username} name="username" id="username" />
                                </MDBCol>
                                <MDBCol md="2">
                                    <input placeholder='EMAIL' type="text" onChange={(event) => setFormData({ ...formData, [event.target.name]: event.target.value })} value={formData.email} name="email" id="email" />
                                </MDBCol>
                                <MDBCol md="2">
                                    <input placeholder='MOBILE' type="text" onChange={(event) => setFormData({ ...formData, [event.target.name]: event.target.value })} value={formData.mobile} name="mobile" id="mobile" />
                                </MDBCol>
                                <MDBCol className='offset-2' md="2">
                                  <button data-tag={formData.id} value={formData.id} onClick={updatedata}> UPDATE DATA</button>
                                 
                                </MDBCol>


                            </MDBRow>
                           
                            { JSON.stringify(formData)} <br />
                            {/* { JSON.stringify(formData.id)} <br /> */}
 
                            <table className='table table-bordered table-striped'>
                                <thead className='bg-dark text-light'>
                                    <tr>
                                        <th>User Name</th>
                                        <th>Email</th>
                                        <th>Mobile</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        loadingStatus ?
                                            Object.entries(data).map((val, key) => {
                                                return <tr key={key}>
                                                    <td>{val[1].username}</td>
                                                    <td>{val[1].email}</td>
                                                    <td>{val[1].mobile}</td>
                                                    <td width="220px">
                                                        {/* <button className='btn btn-sm btn-info' ><MDBIcon icon='pen' onClick={editdata} value="a" data-tag="abc" /></button> */}
                                                        <Link to={`/admin/users/`+val[1].id}>edit</Link>
                                                        <button className='btn btn-sm btn-info' ><MDBIcon icon='pen' onClick={editdata} value="a" data-tag={val[1].id} /></button>
                                                        <button className='btn btn-sm btn-danger' value={val[1].id} onClick={deletedata}><MDBIcon icon='trash' />{val[1].id} </button>
                                                    </td>
                                                </tr>
                                            }) : "Loading..."
                                    }

                                </tbody>
                            </table>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>

        </>
    );
};

export default AdminAllUsers;