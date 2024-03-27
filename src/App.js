import React from 'react'
import { Navbar,Footer } from './components';
import {Header,About, Features}  from './containers';
import './App.css'

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tagline from './containers/Tagline/Tagline';

const App = () => {
    return (
        <div className='App'>
            <div className='gradient__bg'>
                <Navbar />
                <Header />
                <About />
                <Features />
                {/* <Pricing /> */}
                <Tagline/>
                <Footer />
            </div>


        </div>

    )
}

export default App
