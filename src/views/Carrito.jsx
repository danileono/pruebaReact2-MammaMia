import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import Button from "react-bootstrap/Button";

const Carrito = () => {
    const { carrito, agregarCarrito, eliminarCarrito, calcularTotal } = useContext(GlobalContext) //aqui me traigo lo que voy a usar del context


    return (
        <>
            <h2>Detalle de la compra</h2>
            <table className="table">

                
    <tbody>
    {carrito.map((pizza) => 
        <>
            {pizza.cantidad > 0 ? 
                <tr key={pizza.id}>
                    <td className='td-dani'><img className="cart-img" src={pizza.info.img} alt={pizza.info.name} /></td> {/* // pizza.info.img me lo traigo del context de carrito.push */}
                    <td>{pizza.info.name}</td>
                    <td>{pizza.info.price * pizza.cantidad}</td>
                    <td>
                    <Button variant="warning" onClick={() => eliminarCarrito(pizza.info)}>-</Button>
                    </td>
                    <td>{pizza.cantidad}</td>
                    <td>
                    <Button variant="warning" onClick={() => agregarCarrito(pizza.info)}>+</Button>
                    </td>
                </tr>
            : <></>}
    </>

    
    )}

<h3>Total: ${calcularTotal()}</h3>
    </tbody>
    </table>
    </>
    )
}  

export default Carrito