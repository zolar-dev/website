import { useState, useEffect } from "react";
import CountUp from "react-countup";
import Countdown from "react-countdown";
import moment from "moment-timezone"
import  '../../../Counts.css';


export function FechaContador() {
  const [date, setDate] = useState(moment().tz("America/Guatemala"));

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(moment().tz("America/Guatemala"));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="counter-container">
      <div className="counter-value">
        {date.format("DD/MM/YYYY")}
      </div>
      <div className="counter-label">Fecha actual</div>
    </div>
  );
}

export function ProyectosContador() {
  return (
    <div className="counter-container">
      <div className="counter-value">
        <CountUp start={0} end={100} delay={0} />
      </div>
      <div className="counter-label">Proyectos realizados</div>
    </div>
  );
}

export function CuentaRegresivaContador() {
  const fechaFinal = new Date("January 1, 2032 00:00:00").getTime();
  const fechaInicial = new Date("January 1, 2022 00:00:00").getTime();

  const calcularAños = (time) => {
    const diff = new Date(time).getTime() - fechaInicial;
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  };

  const renderContador = ({ days, hours, minutes, seconds }) => (
    <div className="counter-container">
      <div className="counter-value">{calcularAños(fechaFinal)} años</div>
      <div className="counter-label">Faltan</div>
      <div className="counter-value">{days} días</div>
      <div className="counter-label">{hours} horas</div>
      <div className="counter-value">{minutes} minutos</div>
      <div className="counter-label">{seconds} segundos</div>
    </div>
  );

  return <Countdown date={fechaFinal} renderer={renderContador} />;
}

export function ClientesContador() {
  return (
    <div className="counter-container">
      <div className="counter-value">
        <CountUp start={0} end={10000} delay={0} />
      </div>
      <div className="counter-label">Clientes satisfechos</div>
    </div>
  );
}