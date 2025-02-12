import { useContext, useEffect, useState } from "react";
import AuthContext from "./shared/Auth-context";

const Login=()=>{
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");
    const{login,setLiFlag,setRgFlag}=useContext(AuthContext)
    useEffect(()=>{
     setLiFlag(false);
     setRgFlag(true);
    },[])
    const handleSubmit=async(e)=>{
        e.preventDefault();
        let payload={
            email:username,
            password:password
        }
        await login(payload)
    }
return(
    <>
    <div className="d-flex justify-content-center align-items-center" style={{minHeight:"500px", minWidth:"600px"}}>
        <div className="card" style={{width:"21.5rem",boxShadow:"0px 0px 10px 0px rgba(0, 0, 0, 0.5)" }}>
            <div className="card-header bg-dark  text-white " >
            <div className="card-title my-2">
               <label style={{fontSize:"18px",fontWeight:"800px"}}>Sign In</label>
            </div>
            </div>

            <div className="card-body ">
                <div className="card-text">
                  <form>
                    <div className="form-group mb-2">
                        <label className="mb-2" style={{float:"left"}} htmlFor="email">Username</label>
                        <input type="text" className="form-control mb-2" id="email" placeholder="Enter username" onChange={(e)=>{setUsername(e.target.value)}} required></input>
                        <small id="emailPromise" className="form-text text-muted mb-2" style={{fontSize:"12px",float:"left"}}>We"ll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group mb-2">
                        <label className="mb-2" htmlFor="password"style={{float:"left"}} >Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Enter password" onChange={(e)=>{setPassword(e.target.value)}} required></input>
                    </div>
                    <div className="form-check mb-3">
                        <input className=" form-check-input  " type="checkbox" id="checkbox1"></input>
                        <label className="form-check-label " htmlFor="checkbox1" style={{float:"left"}} > <small id="emailPromise" className="form-text text-muted mb-2" style={{fontSize:"12px",float:"left"}}>Remember me</small></label>
                    </div>
                    <div className="form-group mb-3">
                        <button className="btn btn-md btn-dark form-control" type="submit" onClick={handleSubmit}>Login</button>
                    </div>
                  </form>
                </div>
            </div>
          
        </div>
    </div>
    </>
)
}
export default Login;