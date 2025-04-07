import { useEffect, useState } from "react";
import "./DatosCuenta.css";

const DatosCuenta = () => {
  const [datos, setDatos] = useState(null);

  useEffect(() => {
    // Cargar datos desde el archivo JSON
    fetch("./datos.json")
      .then((response) => response.json())
      .then((data) => setDatos(data))
      .catch((error) => console.error("Error al cargar los datos:", error));
  }, []);

  if (!datos) {
    return <p>Cargando datos...</p>;
  }

  return (
    <div className="container">
      <div className="text-center">
        <img
          src="./img/megamovil-logo.png"
          alt="Mega Móvil LOGO"
          className="megamovil-logo mb-5"
        />
        <h1 className="">Bienvenido a la comunidad Mega móvil</h1>
        <h2 className="">¡Ya tienes tu eSIM!</h2>
      </div>

      <div className="user-data-container mt-5">
        <div className="user-data-content">
          <div>
            <p className="text-center data-txt-general-title">
              <span data-user-name={datos.fullName.split(" ")[0]}>
                {datos.fullName.split(" ")[0]}
              </span>
              , esta es tu cuenta:
            </p>
          </div>

          <div className="data-txt-container mt-4">
            <p className="data-txt-title">Contrato</p>
            <p
              data-contract-number={datos.contractNumber}
              className="data-dinamic data-txt"
            >
              {datos.contractNumber}
            </p>
          </div>

          <div className="data-txt-container">
            <p className="data-txt-title">Nombre</p>
            <p
              data-full-name={datos.fullName}
              className="data-dinamic text-capitalize data-txt"
            >
              {datos.fullName}
            </p>
          </div>

          <div className="data-txt-container">
            <p className="data-txt-title">Correo</p>
            <p data-email={datos.email} className="data-dinamic data-txt">
              {datos.email}
            </p>
          </div>

          <div className="data-txt-container">
            <p className="data-txt-title">Tu número</p>
            <p
              data-phone-number={datos.phoneNumber}
              className="data-dinamic data-txt"
            >
              {datos.phoneNumber}
            </p>
          </div>
        </div>

        <div className="line"></div>

        <div className="data-txt-plan">
          <p className="">
            Tu Plan{" "}
            <span data-plan={datos.plan} className="data-dinamic">
              {datos.plan}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DatosCuenta;
