import { useEffect, useState } from "react";
import "./DatosCuenta.css";

const DatosCuenta = () => {
  const [datos, setDatos] = useState(null);

  useEffect(() => {
    // Cargar datos desde el archivo JSON
    fetch("/datos.json")
      .then((response) => response.json())
      .then((data) => setDatos(data))
      .catch((error) => console.error("Error al cargar los datos:", error));
  }, []);

  if (!datos) {
    return <p>Cargando datos...</p>;
  }

  return (
    <div className="container mt-5">
      <div className="text-center">
        <img src="/img/megamovil-logo.png" alt="Mega Móvil LOGO" className="megamovil-logo mb-5" />
        <h1>Bienvenido a la comunidad Mega móvil</h1>
        <h2>¡Ya tienes tu eSIM!</h2>
      </div>

      <div className="user-data-container mt-5">
        <div>
          <p><span data-user-name={datos.fullName.split(" ")[0]}>{datos.fullName.split(" ")[0]}</span>, esta es tu cuenta:</p>
        </div>

        <div className="mt-3">
          <p>Contrato <span data-contract-number={datos.contractNumber} className="data-dinamic">{datos.contractNumber}</span></p>
          <p data-full-name={datos.fullName} className="data-dinamic">{datos.fullName}</p>
          <p data-email={datos.email} className="data-dinamic">{datos.email}</p>
        </div>

        <div className="mt-3">
          <p>Tu número <span data-phone-number={datos.phoneNumber} className="data-dinamic">{datos.phoneNumber}</span></p>
        </div>

        <div className="mt-3">
          <p>Tu Plan <span data-plan={datos.plan} className="data-dinamic">{datos.plan}</span></p>
        </div>
      </div>
    </div>
  );
};

export default DatosCuenta;