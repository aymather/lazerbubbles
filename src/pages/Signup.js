import React, { useState } from "react";
import { Container, Button, Form } from 'react-bootstrap';
import useAuth from '../utils/hooks/useAuth';

const Signup = () => {

	const [state, setState] = useState({
		email: "",
		password: "",
		password1: ""
	})

	const { signupUser } = useAuth();

	const handleSignup = (e) => {
		e.preventDefault();
		signupUser({
			email: state.email,
			password: state.password,
			password1: state.password1
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
                <Form onSubmit={handleSignup}>
					<Form.Group>
						<Form.Label>Email</Form.Label>
						<Form.Control type="email" name="email" onChange={handleChange}/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" name="password" onChange={handleChange}/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Confirm Password</Form.Label>
						<Form.Control type="password" name="password1" onChange={handleChange}/>
					</Form.Group>
					<Button type="submit">Signup</Button>
				</Form>
            </Container>
        </Container>
    );
};

export default Signup;
