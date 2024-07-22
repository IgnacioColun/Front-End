import React from 'react';
import './css/Note.css';

// Componente funcional que representa una nota
const Nota = ({ nota, removerNota }) => {
  return (
    <div className={`nota ${nota.importante ? 'importante' : ''}`}>
      <h4>{nota.titulo}</h4>
      <p>{nota.descripcion}</p>
      <button onClick={() => removerNota(nota.id)}>Remover</button>
    </div>
  );
};
export default Nota;