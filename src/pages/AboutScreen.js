import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

export const AboutScreen = () => {
    const {user, setUser} = useContext( UserContext )  

    const handleClick=(e)=>{
        e.preventDefault()
        setUser({})
    }
    return (
        <div>
            <h1>About Screen</h1>
            <hr/>

            <pre>
                {JSON.stringify(user,null,3)}
            </pre>

            <button
            className="btn btn-danger"
            onClick={handleClick}
            >
                logout
            </button>

        </div>
    )
}
