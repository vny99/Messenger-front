import axios from "axios";
const POST_URL="/api/post/post";
const GET_POSTS_URL="/api/post/getposts";
class PostService{
    post=async(post)=>{
        let formData= new FormData();
       formData.append("post",JSON.stringify(post))
       post.media.forEach((file) => {
        formData.append("media", file);
      });
       for(let f of formData.entries()){
           //  console.log(f);
       }
        return await axios.post(POST_URL,formData,{headers: {'Content-Type': 'multipart/form-data'}});
    }

    getPosts=async()=>{
         const response= await axios.get(GET_POSTS_URL);
       
         return response;

    }
}
export default new PostService;