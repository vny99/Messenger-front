import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "./shared/Auth-context";

const Register=()=>{
    const [username, setUsername]=useState(null);
    const [password,setPassword]=useState(null);
    const [cPassword,setCPassword]=useState(null);
    const [firstName,setFirstName]=useState(null);
    const [lastName,setLastName]=useState(null);
    const [role,setRole]=useState(null);
    const [errMsg,setErrMsg]=useState("");
    const navigate=useNavigate();
    const {register,setRgFlag}=useContext(AuthContext);
    const [dob,setDob]=useState(new Date());
    const[finalDate,setFinalDate]=useState();
    useEffect(()=>{
     setRgFlag(false)
    },[])
    useEffect(()=>{
   const dobDate= new Date(dob);
   const year=dobDate.getFullYear();
   const month=(dobDate.getMonth()+1).toString().padStart(2,'0');
   const day=dobDate.getDate().toString().padStart(2,'0');
    setFinalDate(`${year}-${month}-${day}`);
    },[dob])
    const handleSubmit=async(e)=>{
        e.preventDefault();
       
        if(username===null|| firstName===null||lastName===null ||role===null){
            setErrMsg("All fields are requried");
        }
        else  if(password!==cPassword){
            setErrMsg("passwords do not match");
        }
        else if(dob>new Date()){
            setErrMsg("Enter a valid dob");
        }
        else{
            setErrMsg("");
            let payload={
                email:username,
                password:password,
                firstName:firstName,
                lastName:lastName,
                dob:dob,
                role:role
            }
           let response= await register(payload);
          if(response.status===200){
            navigate("/login");
          }
          else{
            setErrMsg(response);
          }
          
        }
       
    }
    
    return(
        <>
        <div className="d-flex justify-content-center align-items-center  " style={{minHeight:"500px",minwidth:"600px"}}>
           <div className="card my-2" style={{width:"22.5rem",boxShadow:"0px 0px 10px 0px rgba(0,0,0,0.5)",fontSize:"12px"}}>
           <div className="card-header bg-dark text-white">
           <div className="card-title my-2">
                <label style={{fontSize:"18px", fontWeight:"800px"}}>Register</label>
            </div>
           </div>
           <div className="card-body">
            <div className="card-text">
                <form>
                    <div className="form-group mb-1">
                        <label className="mb-1" style={{float:"left"}} htmlFor="email">Username</label>
                        <input type="text" className="form-control  mb-1" id="email" placeholder="Enter email" onChange={(e)=>{setUsername(e.target.value)}} style={{height:"25px"}} required/>
                    </div>
                    <div className="form-group mb-1">
                        <label className="mb-1" htmlFor="password" style={{float:"left"}}>Password</label>
                        <input type="password"className="form-control" id="password" placeholder="Enter password" onChange={(e)=>{setPassword(e.target.value)}} style={{height:"25px"}} required/>
                    </div>
                    <div className="form-group mb-1">
                        <label className="mb-1" htmlFor="password" style={{float:"left"}} >Confirm Password</label>
                        <input className="form-control" type="password" id="cPassword" placeholder="Re-Enter password" onChange={(e)=>{setCPassword(e.target.value)}} style={{height:"25px"}} required/>
                    </div>
                    <div className="form-group mb-1">
                        <label className="mb-1" style={{float:"left"}} >First Name</label>
                        <input type="text" className="form-control" id="firstName" onChange={(e)=>{setFirstName(e.target.value)}} style={{height:"25px"}} required ></input>
                    </div>
                    <div className="form-group mb-1">
                       <label className="mb-1" style={{float:"left"}}>LastName</label> 
                       <input type="text" className="form-control" id="lastName" onChange={(e)=>{setLastName(e.target.value)}}style={{height:"25px"}} required></input>     
                    </div>
                    <div className="form-group mb-1">
                        <label className="mb-1" style={{float:"left"}}>DOB</label>
                        <input type="date" className="form-control" di="dob" value={finalDate } onChange={(e)=>{setDob(new Date(e.target.value))}} style={{height:"25px"}} required></input>
                    </div>
                    <div className="form-group mb-3">
                        <label className="mb-1" style={{float:"left"}}>Role</label>
                        <select className="form-select data-toggle mb-1" onChange={(e)=>{setRole(e.target.value)}} style={{height:"30px",fontSize:"12px"}} required  >
                            < option className="form-control bg-secondary text-white" value="" selected disabled>Select Role</option>
                            <option className="form-control bg-dark text-white" value="ADMIN">admin</option>
                            <option className="form-control bg-dark text-white" value="USER">user</option>
                        </select>
                        
                    </div>
                    {errMsg!==""&&<p className="text-danger">{errMsg}</p>}
                    <div className="form-group mb-1 ">
                        <button className="btn btn-sm btn-dark form-control" type="submit" onClick={handleSubmit} >Register</button>
                    </div>
                </form>
            </div>
           </div>
           </div>
        </div>
        </>
    )

}
export default Register;