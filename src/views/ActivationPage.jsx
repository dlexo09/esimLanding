import "./ActivationPage.css";
import { Link } from "react-router-dom"; // Importa Link para la navegación

const ActivationPage = () => {
  return (
    <>
      <div className="container vh-100 d-flex flex-column justify-content-center align-items-center text-center">
        <img src="/img/megamovil-logo.png" alt="Mega Móvil LOGO" className="logo-megamovil-principal mb-5" />
        <h1>Bienvenido a la comunidad Mega móvil</h1>
        <p className="mt-3">
          Activa tu eSIM dando clic en el botón de activar y disfruta de la mejor conexión con Mega Móvil. <br />
          Sin esperas, sin complicaciones, solo activa y comienza a navegar.
        </p>
        <Link to="/esim" className="general-btn mt-4">Activar eSIM</Link>
      </div>
    </>
  );
};

export default ActivationPage;
