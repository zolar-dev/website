import React from "react"

const Values = ({ title, description }) => {
    return (
        <div className="col-md-4 text-center">
        <h6>{title}</h6>
        <p>{description}</p>
        </div>
    );
  };

  export default function CoreValues(){
    const valuesArr = [
        { title: "Nuestra Misión", description: "Ser una empresa comprometida a mejorar las vidas y entornos laborales de nuestros clientes, colaboradores y comunidades a través de la tecnología." },
        { title: "Nuestra Visión", description: "Ser un referente de soluciones tecnológicas a nivel mundial generando valor a empresas y personas en todos los ámbitos y sectores." },
        { title: "Valores", description: "People first." }
    ]
    return(
        <section className="section bg-c-light border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-5 text-center">
                            <h3 className="main-heading">Misión, Visión y Valores</h3>
                            <div className="underline mx-auto"></div>
                            <div className="row">
                            {valuesArr.map((values) => (
                            <Values
                            title={values.title}
                            description={values.description}
                            />
                        ))}
                            </div>
                            </div>
                    </div>
                </div>
        </section>
    );
}
