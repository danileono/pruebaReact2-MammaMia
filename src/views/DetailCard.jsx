import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContext'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";




const DetailCard = () => {
    const { id } = useParams();
    const { pizzas, agregarCarrito } = useContext(GlobalContext)
    const [ pizza, setPizza ] = useState({})
    const [ loading, setLoading ] = useState(true)
    


useEffect(()=>{
const pizzaDetail = pizzas.find((pizza)=> pizza.id === id); // variable que usa metodo find para encontrar una pizza que contega el id de la ruta (id del useparams)

if (pizzaDetail) {
    setPizza(pizzaDetail) //en setPizza se guarda la pizza que se encontro con el find
    setLoading(false)
}
}, [id, pizzas])




    return (
<div className='container-detail-card-dani'>
{loading ? <>cargando</>: <Card className="detail-card-dani">
        <Card.Img  variant="top" src={pizza.img} />
        <Card.Body>
            <Card.Title>
            <strong>{pizza.name}</strong>
            </Card.Title>
            <ListGroup>
            {pizza.ingredients.map((ingredient, index) => (
                <ListGroup.Item key={index}>🍕{ingredient}</ListGroup.Item>
            ))}
            </ListGroup>
            <Card.Text>{pizza.desc}</Card.Text>
            <div>
            <Button variant="info" onClick={() => agregarCarrito(pizza)}>
                Agregar </Button>
            </div>
        </Card.Body>
    </Card>}
    
</div>
    )
}

export default DetailCard