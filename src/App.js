import React, { useState, useEffect, useMemo } from 'react';

function App() {
  // O primeiro parâmetro é o nome da variável que armazenará o estada
  // O segundo é o nome da função que altera o estado
  const [tech, setTech] = useState(['ReactJS', 'ReactNative']);
  const [newTech, setNewTech] = useState('');

  function handleAdd() {
    setTech([...tech, newTech]);
    setNewTech('');
  }

  // A função será executada apenas uma vez, dado que o segundo parâmetro
  // é um array vazio.
  // -----------------------------
  // Simula o didMount
  useEffect(() => {
    const storageTech = localStorage.getItem('tech');

    if (storageTech) {
      setTech(JSON.parse(storageTech));
    }
  }, []);

  // 1. O primeiro parâmetro do método useEffect é a função que vai ser
  // executada;
  // 2. O segundo parâmetro é quando ela vai ser executada. Esse é um array
  // de dependências que fica monitorando alterações em certas variáveis.
  // Se for passado um array vazio, o método executará apenas uma vez.
  // ----------------------
  // Simula o didUpdate
  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech));
  }, [tech]);

  const techSize = useMemo(() => tech.length, [tech]);

  return (
    <>
      <ul>
        {tech.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <strong>Você tem {techSize} tecnologias</strong>
      <br />
      <input value={newTech} onChange={e => setNewTech(e.target.value)} />
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}

export default App;
