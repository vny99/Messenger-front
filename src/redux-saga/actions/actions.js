import { GET_FRIENDS_REQUESTS, GET_FRIENDS_REQUESTS_FAILURE, GET_POSTS, GET_POSTS_FAILURE, GET_POSTS_SUCCESS, INDEXTOREMOVE, POST, POST_FAILURE, POST_SUCCESS } from "./actionTypes";

export const indexToRemove = () => {
    return {
        type: INDEXTOREMOVE,
        payload: null
    };
}

export const post = (payload) => {
    return {
        type: POST,
        payload: payload
    }
}
export const postSuccess = (payload) => {
    return {
        type: POST_SUCCESS,
        payload: payload
    }
}
export const postFailure = (payload) => {
    return {
        type: POST_FAILURE,
        payload: payload
    }
}
export const getPosts = (payload) => {
    return {
        type: GET_POSTS,
        payload: payload
    }
}
export const getPostsSuccess = (payload) => {
    return {
        type: GET_POSTS_SUCCESS,
        payload: payload
    }
}
export const getPostsFailure = (payload) => {
    return {
        type: GET_POSTS_FAILURE,
        payload: payload
    }
}

export const getFriendRequests = (payload) => {
    return {
        type: GET_FRIENDS_REQUESTS,
        payload: payload
    }
}

export const getFriendRequestsSuccess = (payload) => {
    return {
        type: GET_POSTS_SUCCESS,
        payload: payload
    }
}

export const getFriendRequestsFailure = (payload) => {
    return {
        type: GET_FRIENDS_REQUESTS_FAILURE,
        payload: payload
    }
}