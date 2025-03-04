import axios from 'axios';

const url = 'https://flipkart-clone-ry1e.onrender.com';

export const authenticateLogin = async (user) => {
    try {
        
        return await axios.post(`${url}/api/login`, user)
    } catch (error) {
        console.log('Error while calling login API: ', error);
    }
}

export const authenticateSignup = async (user) => {
    try {
        return await axios.post(`${url}/api/signIn`, user)
    } catch (error) {
        console.log('Error while calling Signup API: ', error);
    }
}


