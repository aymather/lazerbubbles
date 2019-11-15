import { useContext } from 'react';
import { AuthContext } from '../contexts/authContext';
import axios from 'axios';

const useAuth = () => {
    const [state, setState] = useContext(AuthContext);

    function loginUser(user) {
        axios({
			url: "https://lazerbubbles-api.herokuapp.com/login",
			method: 'POST',
			email: user.email,
			password: user.password,
			headers: {
				['Access-Control-Allow-Origin']: '*'
			}
		})
		.then(res => {
			console.log(res)
			window.localStorage.setItem('token', res.token);
			window.localStorage.setItem('user', res.user);

			setState({
				...state,
				isLoggedIn: true
			})
		})
		.catch(err => {
			console.error(err);
		});
    }

    function signupUser(user) {
        axios.post("https://lazerbubbles-api.herokuapp.com/create-account", {
			email: user.email,
			password: user.password,
			password1: user.password1
		})
		.then(res => {
			console.log(res);
			loginUser(user);
		})
		.catch(err => {
			console.error(err);
		})
    }

    function logoutUser(user) {
    //code to logout user
    }

    return {
        signupUser,
        logoutUser, 
        loginUser,
        isLoggedIn: state.loggedIn,
    };
};

export default useAuth;