import "./DatosCuenta.css";
const DatosCuenta = () => {
  return (
    <div className="container">
      <div className="text-center">
        <img src="" alt="Mega Móvil LOGO" />
        <h1>Bienvenido a la comunidad Mega móvil</h1>
        <h2>¡Ya tienes tu eSIM!</h2>
      </div>

      <div className="user-data-container">
        <p><span>Alejandro</span>, esta es tu cuenta:</p>

        <p>Contrato <span>041-0717810</span></p>
        <p>Alejandro Torres Madrigal</p>
        <p>atorresm@megacable.com.mx</p>

        <p>Tu número <span>+52 3339543131</span></p>

        <p>Tu Plan <span>eSIM 280 ILIMITADO</span></p>
      </div>
    </div>
  );
};
export default DatosCuenta;
