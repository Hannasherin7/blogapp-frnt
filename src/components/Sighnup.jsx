import axios from 'axios'
import React, { useState } from 'react'
import { Nav } from './Nav'

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
        axios.post("http://localhost:8080/sighnup",data).then(
          (response)=>{
            console.log(response.data)
            if (response.input.status=="success") {
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
        <Nav></Nav>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">name</label>
                        <input type="text" className="form-control" name='name'value={data.namel}onClick={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">email id</label>
                    <input type="email" className="form-control" name='email'value={data.email}onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">password</label>
                    <input type="password" className="form-control" name='pswd'value={data.pswd}onChange={inputHandler}/>
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