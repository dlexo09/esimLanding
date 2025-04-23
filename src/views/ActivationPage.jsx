import "./ActivationPage.css";
import { Link, useLocation } from "react-router-dom";

const ActivationPage = () => {
  const location = useLocation();
  // Ahora solo necesitas una parte en el path para que sea un token
  const pathParts = location.pathname.split("/").filter(Boolean);
  const token = pathParts.length === 1 ? pathParts[0] : null;

  return (
    <div className="vh-100 d-flex flex-column justify-content-center align-items-center text-center">
      <img src="./img/megamovil-logo.png" alt="Mega Móvil LOGO" className="logo-megamovil-principal mb-5" />
      <h1>Bienvenido a la comunidad Mega móvil</h1>
      <p className="mt-3">
        Activa tu eSIM dando clic en el botón de activar y disfruta de la mejor conexión con Mega Móvil. <br />
        Sin esperas, sin complicaciones, solo activa y comienza a navegar.
      </p>
      {token ? (
        <Link to={`/esim/${token}`} className="general-btn mt-4">Activar eSIM</Link>
      ) : (
        <p className="text-danger mt-4">Token no válido o no encontrado en la URL.</p>
      )}
    </div>
  );
};

export default ActivationPage;