import { useState } from 'react';
import Card from './Card';

function Formulario() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [error, setError] = useState('');
  const [datos, setDatos] = useState(null);

  const handleInput1Change = (e) => setInput1(e.target.value.trimStart());
  const handleInput2Change = (e) => setInput2(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input1.length < 3) {
      setError('El nombre debe tener mas de 3 caracteres');
      setDatos(null);
      return;
    }

    if (input2.length < 6) {
      setError('Tu animal favorito debe tener mas de 6 caracteres');
      setDatos(null);
      return;
    }

    setDatos({ input1, input2 });
    setError('');
  };

  return (
    <div>
      <h2>Formulario de Información</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" value={input1} placeholder="Ingresa tu nombre" onChange={handleInput1Change} />
        </div>
        <div>
          <input type="text" value={input2} placeholder="Ingresa tu animal favorito" onChange={handleInput2Change} />
        </div>
        <button type="submit">Enviar</button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {datos && <Card input1={datos.input1} input2={datos.input2} />}
    </div>
  );
}

export default Formulario;
