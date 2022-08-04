import React, {useState, useEffect} from "react";
import { Form, Button } from "react-bootstrap";
import ListaTareas from "./ListaTareas";


const Formulario = () => {
    //aqui va la logica
    let tareasLocalStorage = JSON.parse(localStorage.getItem("arregloTareasKey")) || [];
    //crear un state
    const [arregloTareas, setArregloTareas] = useState(tareasLocalStorage); //no asignar valores al state, usar siempre setState para hacerlo...
    const [tarea, setTarea] = useState('');

    //ciclo de vida del componente
    useEffect(()=>{
        localStorage.setItem("arregloTareasKey", JSON.stringify(arregloTareas));
    }, [arregloTareas]);

    // const actualizarTarea = (e) => {
    //     //obtener el value del input desde "e.target.value"
    //     //actualizar state con valor ingresado
    //     setTarea(e.target.value.trim())
    // }

    const handleSubmit=(e)=>{
        e.preventDefault();
        setArregloTareas([...arregloTareas, tarea]); //actualizo listado de tareas (operador spread)
        setTarea("")
    }

    const borrarTarea = (nombre) =>
    {
        let arregloNuevo = arregloTareas.filter((tarea)=>{return tarea!==nombre;});
        setArregloTareas(arregloNuevo);
    }

    //aqui va el maquetado y un poquito de logica
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3 d-flex">
                    {/* <Form.Control type="text" placeholder="Ingrese una tarea" onChange={actualizarTarea}/> */}
                    <Form.Control 
                    type="text" 
                    placeholder="Ingrese una tarea" 
                    onChange={(e)=>setTarea(e.target.value.trimStart())}
                    value={tarea}
                    />
                    <Button variant="primary" type="submit">
                        Enviar
                    </Button>
                </Form.Group>
            </Form>
            <ListaTareas arregloTareas={arregloTareas} borrarTarea={borrarTarea}/>
        </div>
    );
};

export default Formulario;
