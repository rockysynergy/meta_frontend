import logo from './logo.svg';
import './App.css';

import React from 'react';
import Header from './Header';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';

const App = () => {
    return (
        <>
            <Header />
            <Nav />
            <Main />
            <Footer />
        </>
    );
};

export default App;
