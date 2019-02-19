import React from 'react';
import Container from 'react-bootstrap/Container';
import { HeaderBar } from './components';
import Movies from './movies/Movies';
import './App.scss';

const App = () => (
    <div className="App">
        <HeaderBar />
        <Container fluid="true" className="py-4">
            <Movies />
        </Container>
    </div>
);

export default App;
