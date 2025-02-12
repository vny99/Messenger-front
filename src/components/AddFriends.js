import { useEffect, useState } from "react";
import "../components/Css/AddFriends.css";
import { useDispatch, useSelector } from "react-redux";
import { GET_FRIENDS_REQUESTS } from "../redux-saga/actions/actionTypes";

const AddFriends=()=>{
  const [friendRequests,setFriendRequests]=useState([]);
  const dispatch = useDispatch();
  const firiendRequestsResponse = useSelector(state => state.getFriendRequests.requests === undefined ? state.getFriendRequests.error : state.getFriendRequests.requests)

  useEffect(()=> {
    dispatch({
      type : GET_FRIENDS_REQUESTS,
      payload : null
    })
    if(firiendRequestsResponse != null){
      if(firiendRequestsResponse.status === 200){
        setFriendRequests(firiendRequestsResponse.body)
      }
    }
  },[friendRequests]);

    return(<>
      <div className=" ribbon row  mx-3 p-2 my-2 ">
        <h1> Friend Requestes</h1> </div>
       <div className="container  mx-3 p-2 my-2 "> 
        <h1> add friends</h1> </div>
    </>)
}
export default AddFriends;