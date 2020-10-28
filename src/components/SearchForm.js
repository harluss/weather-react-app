import React, { useState, useRef, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const SearchForm = () => {
	const initialLocation = { city: '', country: '' };
	const [validated, setValidated] = useState(false);
	const [location, setLocation] = useState(initialLocation);
	const cityInputField = useRef();

	const setInputFocus = (input) => input.current.focus();

	const handleSubmit = (e) => {
		e.preventDefault();
		const form = e.currentTarget;

		if (form.checkValidity() === false) {
			e.stopPropagation();
		}

		setValidated(true);
		console.log(location);

		if (form.checkValidity() === true) {
			setLocation(initialLocation);
			setInputFocus(cityInputField);
			setValidated(false);
		}
	};

	const handleChange = (e) => {
		const { name, value } = e.target;

		setLocation((prevLocation) => {
			return { ...prevLocation, [name]: value };
		});
	};

	const handleBlur = (e) => {
		const { name, value } = e.target;

		setLocation((prevLocation) => {
			return { ...prevLocation, [name]: value.trim() };
		});
	};

	useEffect(() => {
		setInputFocus(cityInputField);
	}, []);

	return (
		<>
			<Form noValidate validated={validated} onSubmit={handleSubmit}>
				<Form.Row className='justify-content-center'>
					<Form.Group controlId='formCity'>
						<Form.Label>City</Form.Label>
						<Form.Control
							type='text'
							name='city'
							placeholder='Enter city'
							required
							onBlur={handleBlur}
							onChange={handleChange}
							value={location.city}
							ref={cityInputField}
						/>
						<Form.Control.Feedback type='invalid'>
							Please enter a city.
						</Form.Control.Feedback>
					</Form.Group>
				</Form.Row>
				<Form.Row className='justify-content-center'>
					<Form.Group controlId='formCountry'>
						<Form.Label>Country</Form.Label>
						<Form.Control
							type='text'
							name='country'
							placeholder='Enter country'
							required
							onBlur={handleBlur}
							onChange={handleChange}
							value={location.country}
						/>
						<Form.Control.Feedback type='invalid'>
							Please enter a country.
						</Form.Control.Feedback>
					</Form.Group>
				</Form.Row>
				<Form.Row className='justify-content-center'>
					<Button variant='outline-primary' type='submit'>
						Submit
					</Button>
				</Form.Row>
			</Form>
		</>
	);
};

export default SearchForm;
