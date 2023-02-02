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
        { title: "Nuestra Vision", description: "Texto de la Vision" },
        { title: "Nuestra Mision", description: "Texto de la Mision" },
        { title: "Valores", description: "Texto de los valores" }
    ]
    return(
        <section className="section bg-c-light border-top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-5 text-center">
                            <h3 className="main-heading">Vision, mision y valores</h3>
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
