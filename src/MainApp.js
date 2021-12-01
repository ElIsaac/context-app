import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'

import { AppRouter } from './pages/AppRouter'

export const MainApp = () => {
    return (
        <div className="container">
            <h1>Main App</h1>
            <hr/>
            
            <AppRouter/>
        </div>
    )
}
