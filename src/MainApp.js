import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useState } from 'react'
import { UserContext } from './context/UserContext'

import { AppRouter } from './pages/AppRouter'

export const MainApp = () => {
    const [user, setUser] = useState({})
    return (
            <UserContext.Provider value={{
                user,
                setUser
                }}>
                <AppRouter/>
            </UserContext.Provider>
    )
}
