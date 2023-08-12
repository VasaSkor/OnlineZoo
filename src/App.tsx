import React from 'react';
import './styles/App.scss';
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/pages/Home";
import Donate from "./components/pages/Donate";
import NotFound from "./components/pages/NotFound";
import Footer from "./components/Footer";

const App = () => {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/donate' element={<Donate />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
                <Footer/>
            </div>
        </Router>
    );
};

export default App;