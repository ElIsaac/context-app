import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

export const LoginScreen = () => {
    const {setUser} =useContext(UserContext)
    const newUsuario=(e)=>{
        e.preventDefault()
        setUser(
            {
                
                id:123
            }
            )
    }
    return (
        <div>
            

            <div className="card">
                <div className="card-header">
                    Nuevo Usuario
                </div>
                <div className="card-body">
                <form>
                <div className="form-group">
                    <label >Email </label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                    <small id="emailHelp" className="form-text text-muted">no difundir esta info</small>
                </div>
                <div className="form-group">
                    <label >Contraseña</label>
                    <input type="Contraseña" className="form-control" id="exampleInputContraseña1" placeholder="Contraseña" />
                </div>
               <hr/>
                <button className="btn btn-primary"
                onClick={newUsuario}
                >
                    Enviar
                </button>
            </form>
                </div>
            </div>


        </div>
    )
}
