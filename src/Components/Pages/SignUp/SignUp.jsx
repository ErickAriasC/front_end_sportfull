import React from 'react'
import { Header } from '../../Layouts/Header/Header'
import { Main } from '../../Layouts/Main/Main'
import { NavLink } from 'react-router-dom'

import Input from '../../UI/Input/Input'
import './SignUp.css'

export const SignUp = () => {
  return (
    <div className='signUp'>
      <Header className='header'>
        <img className='logo' src='/public/3.png' alt='img' />
      </Header>

      <Main>
        <h1 className='title_signUp'>Registrarse</h1>
        <Input name='Nombre Completo' />
        <Input name='Correo' />
        <Input name='Contraseña' />
        <Input name='Confirmar Contraseña' />

        <div className="account-type-container">
          <p>Seleccione el tipo de cuenta</p>
          <label className="radio-option">
            <input
              type="radio"
              name="accountType"
              value="cliente"
              // checked={selectedAccount === 'cliente'}
              // onChange={handleAccountChange}
            />
            <span className="custom-radio"></span>
            Cliente
          </label>
          <label className="radio-option">
            <input
              type="radio"
              name="accountType"
              value="empresa"
              // checked={selectedAccount === 'empresa'}
              // onChange={handleAccountChange}
            />
            <span className="custom-radio"></span>
            Empresa
          </label>
        </div>
        <NavLink className={'register'}>Registrarse</NavLink>
        <NavLink className={'return'} to={'/'} >Volver</NavLink>

      </Main>

    </div>
  )
}
