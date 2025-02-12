import { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel"
import "./Css/AddPostCarousal.css"
import { useDispatch } from "react-redux";
import { INDEXTOREMOVE } from "../redux-saga/actions/actionTypes";

const AddPostCarousal=(props)=>{
  const dispatch= useDispatch();
   
     
    function checkMedia(e){
       const extension =e.name.split('.').pop().toLowerCase();
       return(extension)
    }
     async function hanldeDelete(e){
      await dispatch({
        type:INDEXTOREMOVE,
        payload:e
      })
   await dispatch(
        {
          type:INDEXTOREMOVE,
          payload:null
        }
      )
    }

    return (
      <>
      {props.media.length>1 ?
       <Carousel  variant="dark" loop interval="3000" >
       {props.media.map((element,index)=>(
           <Carousel.Item key={index}>
             <button className="tag-remover-carousal " onClick={()=>{hanldeDelete(index)}}  >&times;</button>
               { ["jpg","png","jpeg"].includes(checkMedia(element)) &&
               <img src={URL.createObjectURL(element)} className="uploaded-image"/>
               }
               {["mp4","mov","avi"].includes(checkMedia(element)) &&
               <video className="uploaded-image"  autoPlay loop>
                   <source src={URL.createObjectURL(element)} type="video/mp4"/>
               </video> }
           </Carousel.Item> 
       ))
       }
      </Carousel>:
      <>
       <button className="tag-remover-carousal " onClick={()=>{hanldeDelete(0)}} >&times;</button>
      {["jpg","png","jpeg"].includes(checkMedia(props.media[0]))&&
      <img src={URL.createObjectURL(props.media[0])} className="uploaded-image"/>
      }
      {["mp4","mov", "avi"].includes(checkMedia(props.media[0]))&&
      <video className="uploaded-image" controls autoPlay loop>
        <source src={URL.createObjectURL(props.media[0])} type="video/mp4"/>
      </video> 
      }
      </>}
      </>
    )
}
export default AddPostCarousal;