import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./DatosCuenta.css";

const DatosCuenta = () => {
  const [datos, setDatos] = useState(null);
  const { token } = useParams();

  useEffect(() => {
    if (!token) return;

    fetch(`https://tkn-act.megacable.com.mx:6238/api/token/mvno/${token}`, {
      headers: {
        Authorization: "Basic bWVnYUlUOjQ3MjNCQzVFQkY2NjRBMQ==",
      },
    })
      .then((response) => response.json())
      .then((data) => setDatos(data.result || {}))
      .catch((error) => console.error("Error al cargar los datos:", error));
  }, [token]);

  // // Para depuración, puedes dejar este log
  //  console.log(datos);

  if (!datos || typeof datos !== "object") {
    return <p>Cargando datos...</p>;
  }

  // Función segura para obtener el primer nombre
  const getFirstName = (fullName) => {
    if (typeof fullName !== "string" || !fullName.trim()) return "";
    return fullName.trim().split(" ")[0];
  };

  return (
    <div className="container">
      <div className="text-center">
        <img
          src="../img/megamovil-logo.png"
          alt="Mega Móvil LOGO"
          className="megamovil-logo mb-5"
        />
        <h1>Bienvenido a la comunidad Mega móvil</h1>
        <h2>¡Ya tienes tu eSIM!</h2>
      </div>

      <div className="user-data-container mt-5">
        <div className="user-data-content">
          <div>
            <p className="text-center data-txt-general-title">
              <span data-user-name={getFirstName(datos.fullName)}>
                {getFirstName(datos.fullName)}
              </span>
              , esta es tu cuenta:
            </p>
          </div>

          <div className="data-txt-container mt-4">
            <p className="data-txt-title">Contrato</p>
            <p
              data-contract-number={datos.subscriber || ""}
              className="data-dinamic data-txt"
            >
              {datos.subscriber || ""}
            </p>
          </div>

          <div className="data-txt-container">
            <p className="data-txt-title">Nombre</p>
            <p
              data-full-name={datos.fullName || ""}
              className="data-dinamic text-capitalize data-txt"
            >
              {datos.fullName || ""}
            </p>
          </div>

          <div className="data-txt-container">
            <p className="data-txt-title">Correo</p>
            <p data-email={datos.email || ""} className="data-dinamic data-txt">
              {datos.email || ""}
            </p>
          </div>

          <div className="data-txt-container">
            <p className="data-txt-title">Tu número</p>
            <p
              data-phone-number={datos.telephone || ""}
              className="data-dinamic data-txt"
            >
              {datos.telephone || ""}
            </p>
          </div>
        </div>

        <div className="line"></div>

        <div className="data-txt-plan">
          <p>
            Tu Plan{" "}
            <span data-plan={datos.plan || ""} className="data-dinamic">
              {datos.plan || ""}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DatosCuenta;