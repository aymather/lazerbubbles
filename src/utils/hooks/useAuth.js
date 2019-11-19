import { useContext } from 'react';
import { AuthContext } from '../contexts/authContext';
import { UserContext } from '../contexts/userContext';
import axios from 'axios';

const useAuth = () => {
	const [authState, setAuthState] = useContext(AuthContext);
	const [userState, setUserState] = useContext(UserContext);

	function loadUser() {
		const userToken = window.localStorage.getItem('token');
		if(userToken) {
			axios.get("https://lazerbubbles-api.herokuapp.com/user", {
				headers: {
					['x-auth-token']: userToken
				}
			})
			.then(res => {
				const { email, id } = res.data;
				setUserState({
					...userState,
					email,
					id
				})
				setAuthState({
					isLoggedIn: true
				})
			})
			.catch(err => {
				console.log(err);
			})
		}
	}

    function loginUser(user) {
		console.log(user);
        axios.post("https://lazerbubbles-api.herokuapp.com/login", {
			email: user.email,
			password: user.password
		})
		.then(res => {
			console.log(res);
			console.log(res.data.user);
			window.localStorage.setItem('token', res.data.token);
			setUserState({
				...userState,
				email: res.data.user.email,
				id: res.data.user.id
			})

			setAuthState({
				...authState,
				isLoggedIn: true
			})

			window.location = '/loggedin';
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
		loadUser,
        isLoggedIn: authState.isLoggedIn,
    };
};

export default useAuth;