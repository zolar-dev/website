import React, { useState } from 'react';
import MoneyLogo from "../../images/MoneyThink.png";
import AztroLogo from "../../images/Aztro-Logo.png";
import FunSepaLogo from "../../images/FunSepa.png";
import "../../../Clientes.css";

const Clientes = () => {
    
  const [clientes] = useState([
    { id: 1, name: 'MoneyThink', description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ", image: MoneyLogo },
    { id: 2, name: 'Aztro', description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,", image: AztroLogo },
    { id: 3, name: 'Funsepa', description: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,", image: FunSepaLogo }
  ]);

  return (
    <div className="container">
      <h1>Clientes</h1>
      <div className="row">
        {clientes.map((cliente) => (
          <div key={cliente.id} className="col-md-4">
            <div className="card">
              <div className="card-img-container"> 
                <img
                  src={cliente.image}
                  alt={cliente.name}
                  className="rounded-circle card-img" 
                />
              </div>
              <div className="card-body">
                <h3><strong>{cliente.name}</strong></h3>
                <br />
                <p className="card-description">{cliente.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clientes;
