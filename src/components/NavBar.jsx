import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContext'
import { useContext } from 'react'

const NavBar = () => {
    const { calcularTotal } = useContext(GlobalContext)


    return (

        <nav className='nav-pizzas-dani'>
            <div className='logo'><Link to="/"><img src='/fav_pizza.png' />Pizzeria Mamma Mia</Link></div>
                <NavLink to="/carrito">🛒 Carrito ${calcularTotal()}</NavLink>
        </nav>


    )
}

export default NavBar