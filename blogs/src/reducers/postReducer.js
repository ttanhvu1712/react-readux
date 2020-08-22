export default (posts = [], action) => {
    switch(action.type) {
        case 'FECTCH_POSTS':
            return action.payload;
        default:
            return posts
    }
}