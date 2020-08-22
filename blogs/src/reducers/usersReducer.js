export default (users = [], action) => {
    switch(action.type) {
        case 'FECTCH_USER':
            return [...users, action.payload];
        default:
            return users
    }
}