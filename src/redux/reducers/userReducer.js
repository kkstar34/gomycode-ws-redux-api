
const initialState = {
    errMessages : "",
    users :  [
        { id: 1, name : 'John', email : 'john@gmail.com'},
        { id : 2, name : 'Karim', email : 'Karim@gmail.com'},
        { id : 3, name : 'Franck', email : 'Franck@gmail.com'},
    ]
}




export function userReducer(state = initialState, action) {
    
    switch (action.type) {
        case 'ADD-USER' : {
            return {
                ...state,
                users : [...state.users, action.payload]
            }
        }

        case 'GET-ALL-USERS-SUCCESS' : {

            return {
                ...state,
                users : [...action.payload]
            }
        }

        case 'GET-ALL-USERS-FAIL' : {

            return {
                ...state,
                errMessages : action.payload
            }

        }
        default : return state;
    }
}