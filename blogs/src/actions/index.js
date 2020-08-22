import jsonPlaceHolder from '../apis/jsonPlaceHolder';

export const fetchPosts = () => async (dispatch, getState) => {
    const response = await jsonPlaceHolder.get('/posts');
    dispatch({
        type: 'FECTCH_POSTS',
        payload: response.data
    })
}

export const fecthUser = id => async (dispatch, getState) => {
    const response = await jsonPlaceHolder.get(`/users/${id}`);
    dispatch({
        type: 'FECTCH_USER',
        payload: response.data
    })
}