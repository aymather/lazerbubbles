import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Button, Form } from 'react-bootstrap';

import useAuth from '../utils/hooks/useAuth';

const Login = () => {

	const [state, setState] = useState({
		email: "",
		password: "",
	});

	const { loginUser } = useAuth();


	const handleLogin = (e) => {
		e.preventDefault();
		loginUser({
			email: state.email,
			password: state.password
		});
	}

	const handleChange = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value
		});
	}

    return (
        <Container className="login d-flex flex-column justify-content-center">
            <Container className="login-card p-3 w-50">
				<Link to="/">Main Menu</Link>
                <Form onSubmit={handleLogin}>
					<Form.Group>
						<Form.Label>Email</Form.Label>
						<Form.Control type="email" name="email" onChange={handleChange}/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" name="password" onChange={handleChange}/>
					</Form.Group>
					<Button type="submit">Login</Button>
				</Form>
            </Container>
        </Container>
    );
};

export default Login;
