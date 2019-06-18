import superagent from 'superagent';

// Jerome - this makes it so that i return an action
export const set = token => ({
    type: 'TOKEN_SET',
    payload: token,
});

export const remove = () => ({
   type: 'TOKEN_REMOVE',
});

//JEROME - async functions need to take the store as an argument
const API_URL = 'http://localhost:3000/';
const SIGNUP_ROUTE = 'signup';
const LOGIN_ROUTE = 'login';
const LOGOUT_ROUTE = 'logout';

// Jerome - it's your job to call this function with everything it needs
export const signupRequest = user => store => {
    return superagent.post(`${API_URL}${SIGNUP_ROUTE}`) // STEP 1 - MAKING A REQUEST
        .send(user) // object that has username and password
        // .withCredentials() // Jerome - enabling cookie usage
        .then(response => { // STEP 2 - GET A RESPONSE
            // STEP 3 - UPDATE THE STORE WITH A SYNC ACTION
            return store.dispatch(set(response.text));
        })
        .catch(console.log);
};

export const loginRequest = (username, password) => store => {
    console.log('loginRequest');
    return superagent.post(`${API_URL}${LOGIN_ROUTE}`) // STEP 1 - MAKING A REQUEST
        .auth(username, password)
        //withCredentials()
        .then(response => {
            return store.dispatch(set(response.text));
        })
        .catch(console.log);
};




