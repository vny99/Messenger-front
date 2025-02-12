import { useEffect, useRef, useState } from "react";
import ProfilePic from "../assets/profile.jpg";
import Image from "../assets/image.png";
import Video from "../assets/video.png";
import Tag from "../assets/hashtag.png"
import "../components/Css/AddPost.css";
import AddPostCarousal from "./AddPostCarousal";
import { WithContext as TagInput } from "react-tag-input";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineSend } from "react-icons/ai"
import { POST } from "../redux-saga/actions/actionTypes";
import { toast } from 'react-toastify';
const AddPost = () => {
  const imgInputRef = useRef(null);
  const videoInputRef = useRef(null);
  const comRef=useRef(null);
  const[msg,setMsg]=useState("");
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [disableComment, setDisableComment] = useState(false)
  const [media, setMedia] = useState([]);
  const [addTags, setAddTags] = useState(false);
  const [tags, setTags] = useState([]);
  const [privacy,setPrivacy]=useState("EVERYONE");
  const [error,setError]=useState("");
  const indexToDelete = useSelector(state => state.delete.indexToDelete);
  const response=useSelector(state=>state.post.post===undefined?state.post.error:state.post.post);
  const dispatch =useDispatch();

  useEffect(() => {
    if (indexToDelete !== null) {
      setMedia(media.filter((_, index) => {
        return index !== indexToDelete
      }))
    }
   if(response!==null){
    if(response.status===200){
      setMsg("");
      setMedia([]);
      setDisableComment(false);
      setPrivacy("EVERYONE");
      setTags([])
      setAddTags(false);
     if(disableComment){
      comRef.current.click();
     }
      toast.success("post successfull");
    }
    else{
       toast.error("some error occured check your network and try again")
    }
   }
  }, [indexToDelete,response]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file !== undefined && file !== null) {
      let m = media;
      m.push(file);
      setMedia(m);
      setImage(URL.createObjectURL(file));
    }
  }
  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    if (file !== undefined && file !== null) {
      let m = media;
      m.push(file);
      setMedia(m);
      setVideo(URL.createObjectURL(file));
    }
  }
  const handleAddTag = (tag) => {
    setTags([...tags, tag]);
  }
  const handleDeleteTag = (i) => {
    const updatedTags = tags.filter((tag, index) => i !== index);
    setTags(updatedTags);
  }
  const handlePost=()=>{
    let post={};
    post.msg=msg;
    post.media=media;
    post.tags=tags;
    post.disableComment=disableComment;
    post.privacy=privacy;
    dispatch({
      type:POST,
      payload:post
    })
   
  }

  return (<>
    <div className="post  mx-3 p-3 my-4  ">

      <div className="row">
        <div className="row" style={{ width: "70px" }}>
          <div className="  profile-container mx-3">
            <img src={ProfilePic} alt="profile.png" className="profile-pic" />
          </div>
        </div>
        <div className=" col msg-box mx-3">
          <textarea className="form-control msg-box-input" value={msg} rows={2} placeholder="Say something! (optional) " onChange={(e)=>{setMsg(e.target.value)}} />

        </div>

      </div>

      <div className="row mt-3 mx-1">
        <hr />
      </div>
      {media.length > 0 && <div className="row mx-3 mb-1 uploaded-pad">
        <div className="uploaded-div">
          <AddPostCarousal media={media} />
        </div>
      </div>}
      {media.length > 0 &&
        <div className="row mt-3 mx-1">
          <hr />
        </div>}
      <div className="row attachments">
        <div className=" image-pad " style={{ cursor: "pointer" }} onClick={() => { imgInputRef.current.click() }}>
          <input type="file" accept="image/*" ref={imgInputRef} style={{ display: "none" }} onChange={(e) => { handleImageUpload(e) }} className="msg-box-img" />
          <img src={Image} className="image-input " alt="upload" style={{ cursor: "pointer" }} />
          <p >Image</p>
        </div>
        <div className=" image-pad " style={{ cursor: "pointer" }} onClick={() => { videoInputRef.current.click() }}>
          <input type="file" accept="video/*" ref={videoInputRef} style={{ display: "none" }} onChange={(e) => { handleVideoUpload(e) }} className="msg-box-img" />
          <img src={Video} className="image-input " alt="upload" style={{ cursor: "pointer" }} />
          <p >Video</p>
        </div>
        <div className={`image-pad ${addTags ? "tag_background" : ""} `} style={{ cursor: "pointer" }} onClick={() => { setAddTags(!addTags) }} >
          <img src={Tag} className="image-input " alt="upload" style={{ cursor: "pointer" }} />
          <p >Tags</p>
        </div>
        <div className={`comment-disable ${disableComment ? "comment-disable-enable" : ""} `} style={{ cursor: "pointer" }} >
          <input className=" form-check-input  image-input " ref={comRef} onClick={() => { setDisableComment(!disableComment) }} type="checkbox" id="checkbox1"></input>
          <p style={{ fontSize: "small" }} >Disable Comments</p>
        </div>

        <div className="col privacy-pad ">
          <select className="privacy-select  btn-sm " onChange={(e)=>{setPrivacy(e.target.value)}} >
            <option className="privacy-select-option" value="EVERYONE" >Everyone</option>
            <option className="privacy-select-option" value="SOMEONE" >Connections</option>
            <option className="privacy-select-option" value="NOONE" >Me</option>
          </select>
          <div className=" btn btn-sm btn-outline-success post-btn " style={{ marginLeft: "1rem" }} onClick={handlePost} >Post <AiOutlineSend style={{ width: "17px", height: "20px" }} /></div>
        </div>
      </div>

      <div className="row mt-3 mx-1" style={{ marginBottom: "-1rem" }}>
        <hr />
      </div>

      {addTags && <div className="row mx-3 my-3 addtags">
        <TagInput classNames="form-control" tags={tags} placeholder="Press enter to add new tag..." handleAddition={handleAddTag} handleDelete={handleDeleteTag} editable autocomplete />
        <button className="tag-remover " onClick={() => { setAddTags(false) }} >&times;</button>
      </div>}
      {addTags && <div className="row mt-3 mx-1" style={{ marginBottom: "-1rem" }}>
        <hr />
      </div>}
    </div>

  </>)
}
export default AddPost;