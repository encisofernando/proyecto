// frontend/src/App.js
import React from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MarketingPage from './pages/marketing-page/MarketingPage';
import SingIn from './pages/sign-in/SignIn';
import SingUp from './pages/sign-up/SignUp';
import Dashboard from './pages/dashboard/Dashboard';
import Blog from './pages/blog/Blog';
import Checkout from './pages/checkout/Checkout';
import Signinside from './pages/sign-in-side/SignInSide';


function App() {
    return (
        <StyledEngineProvider injectFirst>
            <Router>
                <Routes>
                    <Route path="/" element={<MarketingPage />} />
                    <Route path="/SignIn" element={<SingIn />} />
                    <Route path="/SignUp" element={<SingUp />} />
                    <Route path="/Signinside" element={<Signinside />} />
                    <Route path="/Dashboard" element={<Dashboard />} />
                    <Route path="/Blog" element={<Blog />} />
                    <Route path="/Checkout" element={<Checkout />} />
                    


                </Routes>
            </Router>
        </StyledEngineProvider>
    );
}

export default App;
