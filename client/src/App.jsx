import React from "react"
import HomePage from "./components/HomePage"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from './components/Register'
import Login from './components/Login'
import ProductDetails from './components/ProductDetails'

function App() {
    return (
        <BrowserRouter>
        <React.StrictMode>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path='register' element={<Register />} />
                <Route path='login' element={<Login />} />
                <Route path='details' element={<ProductDetails />} />
            </Routes>
            </React.StrictMode>
        </BrowserRouter>
    );
}

export default App;