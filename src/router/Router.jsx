import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../views/Home'
import DetailCard from '../views/DetailCard'
import Carrito from '../views/Carrito'



export const Router = () => {

    return (
        <Routes>
            <Route path='/' element={ <Home /> }></Route>
            <Route path='/detalle-Pizza/:id' element={ <DetailCard /> }></Route>
            <Route path='/carrito' element={ <Carrito /> }></Route>
        </Routes>
    )
}
