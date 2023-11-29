import React, { createContext, useState, useEffect } from 'react'

export const GlobalContext = createContext()


const GlobalProvider = ({ children }) => {

    const [ pizzas, setPizzas ]= useState ([])
    const [ carrito, setCarrito ]= useState ([])

    const agregarCarrito =(pizzaAgregada)=>{
        const pizzaEnElCarrito = carrito.find((pizza)=> pizza.id === pizzaAgregada.id);

        if (pizzaEnElCarrito){
            pizzaEnElCarrito.cantidad += 1

        } else{
            carrito.push({id: pizzaAgregada.id, info: pizzaAgregada, cantidad: 1})
        }

        setCarrito([...carrito])//seteo del carrito con los cambios que se hicieron en el if else
    }



    const eliminarCarrito=(pizzaEliminada)=>{
        const pizzaEnElCarrito = carrito.find((pizza)=> pizza.id === pizzaEliminada.id);
        pizzaEnElCarrito.cantidad -= 1;

        setCarrito([...carrito])//seteo del carrito con los cambios que se hicieron en el if else
    }


    const calcularTotal = ()=>{
        let total = 0  
        carrito.forEach((pizza)=> total += pizza.cantidad * pizza.info.price)

        return total
    }



    const state = {pizzas, carrito, agregarCarrito, eliminarCarrito, calcularTotal}//aqui se guardan todo lo del contexto que despues se pasa al GlobalContext.provider en el value

    const getData = async () => {
        try {
            const respuesta = await fetch("/pizzas.json");
            const json = await respuesta.json(); //metodo para que convierta la respuesta a formato json
        
            setPizzas(json) //se pasa la info de json a setPizzas para que guardado en pizzas se modifoca el estado con setPizzas

        } catch(error){
            console.log(error)
        }
        
    }

    useEffect(()=>{
        
    getData();
    console.log(pizzas)

        }, []) //se pasa aun array vacio al useEffect para evitar que se ejecute la funcion infinitamente
        
        


    return (
        <GlobalContext.Provider value={state}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;

