import React from "react"
import Service1 from '../../images/imagenServicio.jpg';

const ServiceCard = ({ imageSrc, title, description }) => {
    return (
      <div className="col-md-4">
        <div className="card shadow">
          <img src={imageSrc} className="w-100 border-bottom" alt="Servicios" />
          <div className="card-body">
            <h6>{title}</h6>
            <div className="underline"></div>
            <p>{description}</p>
          </div>
        </div>
      </div>
    );
  };

  export default function Services(){
    const servicesArr = [
        { imageSrc: Service1, title: "Servicio 1", description: "texto de la descripcion"},
        { imageSrc: Service1, title: "Servicio 2", description: "texto de la descripcion"},
        { imageSrc: Service1, title: "Servicio 3", description: "texto de la descripcion"}
    ];

    return(
        <section className="section border-top">
            <div className="container">
                <div className="row">
                    {servicesArr.map((service) => (
                        <ServiceCard
                        imageSrc={service.imageSrc}
                        title={service.title}
                        description={service.description}
                        />
                    ))}
                    </div>
            </div>

</section>
    );
}
