import React from 'react';
import Subtitulo from './components/Subtitulo';
import Titulo from './components/Titulo';
import 'bootstrap/dist/css/bootstrap.min.css'
import Formulario from './components/Formulario'

const App = () => {
    return (
        <div>
            <section className="container my-5">
            <Titulo comision="c2i" prueba={232}/>
            <Subtitulo/>
            <Formulario/>
            </section>
        </div>
    );
};

export default App;