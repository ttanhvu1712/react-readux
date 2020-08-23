export default (users = [], action) => {
    // console.log(users);
    switch(action.type) {
        case 'FETCH_USER':
            return [...users, action.payload];
        default:
            return users
    }
}