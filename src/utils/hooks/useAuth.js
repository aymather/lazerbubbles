import { useContext } from 'react';
import { AuthContext } from '../contexts/authContext';
import { UserContext } from '../contexts/userContext';
import axios from 'axios';

const useAuth = () => {
	const [authState, setAuthState] = useContext(AuthContext);
	const [userState, setUserState] = useContext(UserContext);

	const loadUser = () => {
		const userToken = window.localStorage.getItem('token');
		if(userToken) {
			axios.get("https://lazerbubbles-api.herokuapp.com/user", {
				headers: {
					['x-auth-token']: userToken
				}
			})
			.then(res => {
				const { email, id, google_api } = res.data;
				setUserState({
					...userState,
					email,
					id,
					google_api
				})
				setAuthState({
					isLoggedIn: true
				})
			})
			.catch(err => {
				window.localStorage.removeItem('token');
				console.log(err);
			})
		}
	}

    const loginUser = user => {
        axios.post("https://lazerbubbles-api.herokuapp.com/login", {
			email: user.email,
			password: user.password
		})
		.then(res => {
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
		})
		.catch(err => {
			console.error(err);
		});
    }

    const signupUser = user => {
        axios.post("https://lazerbubbles-api.herokuapp.com/create-account", {
			email: user.email,
			password: user.password,
			password1: user.password1
		})
		.then(res => {
			loginUser(user);
		})
		.catch(err => {
			console.error(err);
		})
    }

    const logoutUser = user => {
		window.localStorage.removeItem('token');
		setUserState({
			...userState,
			email: '',
			id: ''
		})
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