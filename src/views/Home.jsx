import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalContext'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Header from '../components/Header';
import { useNavigate } from "react-router-dom"


const Home = () => {

    const { pizzas, agregarCarrito  } = useContext(GlobalContext)
    const navigate = useNavigate()
    





    return (
        <>
        <Header />

        <div className='cards-container-home'>
                {/* // {pizzas.map((pizza)=>{return <h1>{pizza.name}</h1>} )} */}
                
                    {pizzas.map((pizza) => (
                    <Card key={pizza.id} className='card-dani-home'>
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
                        <div>
                        <Button variant="info" onClick={() => agregarCarrito (pizza)}>
                            Agregar </Button>
                        {/* //al boton mas info le hice la funcion directamente (funcion anonima) */}
                        <Button variant="danger" onClick={() => navigate(`/detalle-Pizza/${pizza.id}`)}> 
                            Mas info
                        </Button>
                        </div>
                    </Card.Body>
                    </Card>
                ))}
        </div>
        </>




    )
}

export default Home