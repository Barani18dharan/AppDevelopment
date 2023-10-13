export default function reducer(state = [], action) {

    switch(action.type) {

        case "login":
            return state = action.payload;
            
        case "logout":
            return state = null;
        
        default:
            return state;
    }
}