import React from 'react';
import { Container } from 'react-bootstrap';
import SearchForm from 'components/SearchForm';

const App = () => {
	return (
		<Container className='my-4'>
			<SearchForm />
			<p>Raining cats and dogs...</p>
		</Container>
	);
};

export default App;
