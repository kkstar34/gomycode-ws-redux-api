
export function getAllUsersSucceeded(users){
    return {
        type: 'GET-ALL-USERS-SUCCESS',
        payload : users
    }
}

export function getAllUsersFailed(message) {
    return {
        type: 'GET-ALL-USERS-FAIL',
        payload : message
    }
}



