import React from 'react'
import Input from '../../UI/Input/Input'
import { Header } from '../../Layouts/Header/Header'
import { Main } from '../../Layouts/Main/Main'
import { NavLink } from 'react-router-dom'
import './Login.css'

export const Login = () => {
  return (
    <div className='container-login'>
       <Header>
        <img className='logo' src='/public/3.png' alt='img'/>
      </Header> 

      <Main>
        <h1 className='title-login'> Iniciar sesion</h1>
        <Input name="Correo"/>
        <Input name="Contraseña"/>
        
        <NavLink className={'recover_password'}>¿Olvidó su contraseña?</NavLink>
        
        <NavLink className={'login'}>Iniciar Sesión</NavLink>
        <NavLink className={'return'} to={'/'} >Volver</NavLink>

      </Main>

       

    </div>
  )
}


