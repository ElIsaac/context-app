import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import { AboutScreen } from './AboutScreen'
import { HomeScreen } from './HomeScreen'
import { LoginScreen } from './LoginScreen'
export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar/>
                <Routes>
                    <Route exact path="/" element={<HomeScreen/>} />
                    <Route exact path="/login" element={<LoginScreen/>} />
                    <Route exact path="/about" element={<AboutScreen/>} />
                </Routes>
            </div>
        </Router>
    )
}
