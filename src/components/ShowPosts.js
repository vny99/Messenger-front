import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_POSTS } from "../redux-saga/actions/actionTypes";

const ShowPosts=()=>{
    const dispatch =useDispatch();
    const response=useSelector(state=>state.getPosts.posts)
    useEffect(()=>{
        dispatch({type:GET_POSTS})
        console.log(response)
    },[])
return(
    <>
    
    </>
)
}
export default ShowPosts;