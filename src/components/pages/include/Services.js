import React from "react"
import Service1 from '../../images/imagenServicio.jpg';

const ServiceCard = ({ imageSrc, title, description }) => {
    return (
      <div className="col-md-4">
        <div className="card-container shadow">
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
        { imageSrc: Service1, title: "Desarrollo de plataformas, sistemas y aplicaciones", description: "Brindamos atención personalizada y asesoría con recomendaciones oportunas y posibles soluciones acorde al cliente y luego lo volvemos realidad."},
        { imageSrc: Service1, title: "Creación de páginas web", description: "Hacemos de cada página web un proyecto personalizado con los recursos necesarios según el giro y la esencia de cada cliente, alineado a sus objetivos y cultura."},
        { imageSrc: Service1, title: "Implementación de sistemas ERP", description: "Brindamos acompañamiento desde la recomendación, estructura e implementación de sistemas ERP hasta outsourcing para el manejo del mismo, así nuestros clientes solo deben enfocarse en promover su empresa y alcanzar sus metas."},
        { imageSrc: Service1, title: "Outsourcing de colaboradores en el área de tecnología", description: "Sabemos que no todas las empresas son iguales y cada necesidad es distinta, si lo que necesitas son colaboradores a tiempo parcial o completo dedicados al área de tecnología te brindamos el servicio outsourcing con profesionalismo, ética y nuestro soporte y respaldo."}
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
