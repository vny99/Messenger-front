import axios from "axios";

const GET_FRIENDS_REQUEST_URL="/api/friends/getRequests"

class FriendsService {

    getFriendRequest = async() => {
        return await axios.get(GET_FRIENDS_REQUEST_URL,{
            user:localStorage.getItem('user').getEmail()
        },{
            withCredentials: true
        })
    }
    
}

export default new FriendsService;