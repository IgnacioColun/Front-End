import React, { useState, useRef, useEffect } from 'react';
import Nota from './Note';
import './css/App.css';

function App() {
  const [notas, setNotas] = useState([]);
  const tituloRef = useRef(null);
  const descripcionRef = useRef(null);
  const importanteRef = useRef(null);

  // Cargar notas desde localStorage cuando el componente se monta
  useEffect(
    () => {
    const notasGuardadas = JSON.parse(localStorage.getItem('notas'));
    if (notasGuardadas) {
      setNotas(notasGuardadas);
    }
    console.log("Notas cargadas:", notasGuardadas);
  }, []);

  // Guardar notas en localStorage cada vez que cambian
  useEffect(
    () => {
    const json = JSON.stringify(notas);
    console.log(json);
    localStorage.setItem('post-it-simulator-notas', json);
  },
   [notas]
  );

  // Función para agregar una nueva nota
  const agregarNota = () => {
    const titulo = tituloRef.current.value;
    const descripcion = descripcionRef.current.value;
    const importante = importanteRef.current.checked;

    // Validar que la descripción no esté vacía
    if (descripcion) { 
      const nuevaNota = {
        id: Date.now(),
        titulo,
        descripcion,
        importante,
      };

      setNotas((notasPrevias) => [...notasPrevias, nuevaNota]);
      tituloRef.current.value = '';
      descripcionRef.current.value = '';
      importanteRef.current.checked = false;
    } else {
      alert('El campo descripción es obligatorio');
    }
  };

  // Función para remover una nota por su id
  const removerNota = (id) => {
    setNotas((notasPrevias) => notasPrevias.filter((nota) => nota.id !== id));
  };

  return (
    <div className="App">
      <h1>Agenda</h1>
      <div className="input-group">
        <input type="text" placeholder="Título" ref={tituloRef} />
        <input type="text" placeholder="Descripción" ref={descripcionRef} required />
        <label>
          Importante!
          <input type="checkbox" ref={importanteRef} />
        </label>
        <button onClick={agregarNota}>Agregar</button>
      </div>
      <div className="notas">
        {notas.map((nota) => (
          <Nota key={nota.id} nota={nota} removerNota={removerNota} />
        ))}
      </div>
    </div>
  );
}

export default App;
