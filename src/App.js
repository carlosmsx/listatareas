import React from 'react';
import Subtitulo from './components/Subtitulo';
import Titulo from './components/Titulo';
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
    return (
        <div>
            <section className="container">
            <Titulo/>
            <Subtitulo/>
            </section>
        </div>
    );
};

export default App;