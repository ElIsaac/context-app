import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

export const HomeScreen = () => {
    const {user} =useContext(UserContext)
    return (
        <div>
            <h1>Home Screen {user.id}</h1>
            <hr/>
            <pre className="container" >
                {JSON.stringify(user,null,3)}
            </pre>
        </div>
    )
}
