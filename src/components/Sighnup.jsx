import axios from 'axios'
import React, { useState } from 'react'

export const Sighnup = () => {
    const [data,setData]=useState(
        {
            "name":"",
            "email":"",
            "password":""
            
        }
      )
      const inputHandler=(event)=>{
        setData({...data,[event.target.name]:event.target.value})
      }
      const readVlue=()=>{
        console.log(data)
        axios.post("http://localhost:8080/sighnin",data).then(
          (response)=>{
            console.log(response.data)
            if (response.data.status=="success") {
              alert("successfully added")
              
            } else {
              alert("error")
              
            }
          }
        ).catch(
          (error)=>{
            console.log(error.message)
            alert(error.map)
          }
        ).finally()
      }

  return (
    <div>
        <h1><center>LOGIN</center></h1>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">name</label>
                        <input type="text" className="form-control" name='name'value={data.namel}onClick={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">email</label>
                        <input type="text" className="form-control" name='email'value={data.email}onClick={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Password</label>
                    <input type="password" className="form-control"name='password'value={data.password}onClick={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                      <br /><br />  <button  className="btn btn-success"onClick={readVlue}>Sighnup</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
       <center><a href="http://localhost:3000/"> <b>already have an account</b></a></center>
    </div>
  )
}