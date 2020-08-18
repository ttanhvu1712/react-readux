import jsonPlaceHolder from '../apis/jsonPlaceHolder';

export const fetchPosts = () => async (dispatch) => {
    const response = await jsonPlaceHolder.get('/posts');
    dispatch({
        type: 'FECTCH_POSTS',
        payload: response
    })
}