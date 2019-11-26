import { useContext, useState } from 'react';
import { GoogleSheetsContext } from '../contexts/googleSheetsContext';
import { UserContext } from '../contexts/userContext';
import axios from 'axios';

const useGoogleSheets = () => {
	const [sheetsState, setSheetsState] = useContext(GoogleSheetsContext);
	const [userState, setUserState] = useContext(UserContext);
	const [options, setOptions] = useState({
		headers: {
			['x-auth-token']: window.localStorage.getItem('token')
		}
	})

	const getSheets = () => {
		console.log('Loading user sheets...');
		axios.get('http://lazerbubbles-api.herokuapp.com/google/sheets', options)
			.then(res => {
				setSheetsState({
					...sheetsState,
					sheets: res.data.files
				})
			})
			.catch(err => {
				console.log(err);
			})
	}

	const getSheet = (id, name, select_1, select_2) => {
		console.log('Loading sheet with name: ' + name);
		setOptions({
			...options,
			qs: {
				id,
				name,
				select_1,
				select_2
			}
		})
		axios.get('https://lazerbubbles-api.herokuapp.com/google/sheet', options)
			.then(res => {
				console.log(res.data);
			})
			.catch(err => {
				console.log(err);
			})
	}

	const getAuthUrl = () => {
		return axios.get('https://lazerbubbles-api.herokuapp.com/google/auth', options);
	}

    return {
		getAuthUrl,
		getSheets,
		getSheet
    };
};

export default useGoogleSheets;