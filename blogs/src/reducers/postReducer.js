export default (posts = [], action) => {
    // console.log(posts);
    switch(action.type) {
        case 'FETCH_POSTS':
            return action.payload;
        default:
            return posts
    }
}