import "./DatosCuenta.css";

const DatosCuenta = () => {
  return (
    <div className="container">

      <div className="text-center">
        <img src="/img/megamovil-logo.png" alt="Mega Móvil LOGO" className="megamovil-logo mb-5" />
        <h1>Bienvenido a la comunidad Mega móvil</h1>
        <h2>¡Ya tienes tu eSIM!</h2>
      </div>

      <div className="user-data-container mt-5">
        <div>
          <p><span data-user-name="Alejandro">Alejandro</span>, esta es tu cuenta:</p>
        </div>

        <div className="mt-3">
          <p>Contrato <span data-contract-number="041-0717810" className="data-dinamic">041-0717810</span></p>
          <p data-full-name="Alejandro Torres Madrigal" className="data-dinamic">Alejandro Torres Madrigal</p>
          <p data-email="atorresm@megacable.com.mx" className="data-dinamic">atorresm@megacable.com.mx</p>
        </div>

        <div className="mt-3">
          <p>Tu número <span data-phone-number="+52 3339543131" className="data-dinamic">+52 3339543131</span></p>
        </div>

        <div className="mt-3">
          <p>Tu Plan <span data-plan="eSIM 280 ILIMITADO" className="data-dinamic">eSIM 280 ILIMITADO</span></p>
        </div>
      </div>
    </div>
  );
};
export default DatosCuenta;
