import { FETCH_POSTS, NEW_POST } from './types';

//async request
//this is where dipatch gets reduced into postReducer
export const fetchPosts = () => dispatch => {
    console.log('fetching');
    fetch('http://localhost:3333/smurfs')
        .then(res => res.json())
        .then(posts => 
            dispatch({
                type: FETCH_POSTS,
                payload: posts
        })
    );
}

export const createPost = (postData) => dispatch => {
    console.log('action called on create ')
    fetch('http://localhost:3333/smurfs', {
        //post request
        method: 'POST',
        //content type
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
    .then(res => res.json())
    .then(post => dispatch({
        type: NEW_POST,
        payload: post
}))
}