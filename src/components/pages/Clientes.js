import React, { useState } from 'react';

const Clientes = () => {
  // Ejemplo de lista de clientes (puedes reemplazarla con tu propia lista de datos)
  const [clientes, setClientes] = useState([
    { id: 1, name: 'Cliente 1', description: 'cliente1@example.com', images: "" },
    { id: 2, name: 'Cliente 2', description: 'cliente2@example.com', images:"" },
    { id: 3, nombre: 'Cliente 3', description: 'cliente3@example.com', images: ""},
  ]);

  return (
    <div>
      <h1>Lista de Clientes</h1>
      <ul>
        {clientes.map((cliente) => (
          <li key={cliente.id}>
            <strong>{cliente.name}</strong> - {cliente.description}
            <img>{cliente.images}</img>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Clientes;