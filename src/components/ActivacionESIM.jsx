import { useEffect, useState } from "react";
import "./ActivacionESIM.css";

const ActivacionESIM = () => {
  const [data, setData] = useState(null); // Estado para almacenar todos los datos
  const [copiedCode, setCopiedCode] = useState(""); // Estado para rastrear el código copiado

  useEffect(() => {
    // Cargar datos desde el archivo JSON
    fetch("./datos.json")
      .then((response) => response.json())
      .then((data) => setData(data)) // Guarda todos los datos en el estado
      .catch((error) => console.error("Error al cargar los datos:", error));
  }, []);

  // Función para copiar texto al portapapeles
  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopiedCode(text); // Actualiza el estado con el código copiado
        setTimeout(() => setCopiedCode(""), 2000); // Limpia el estado después de 2 segundos
      })
      .catch((err) => {
        console.error("Error al copiar el texto: ", err);
      });
  };

  if (!data) {
    return <p>Cargando datos...</p>;
  }

  return (
    <div className="container activation-code-container">
      <h4 className="container-sm text-center mb-5">
        Instala tu E-sim escaneando el código QR desde la configuración de su
        dispositivo móvil.
      </h4>

      <div className="row activation-container d-flex align-items-center justify-content-center mt-3">
        <div className="col-lg-5 qr-activation-code justify-content-center d-flex align-items-center">
          {data.qrCode ? (
            <img src={data.qrCode} alt="QR" />
          ) : (
            <p>Cargando QR...</p>
          )}
        </div>

        <div className="col-lg-6 manual-activation-code-container text-center">
          <p className="activation-code-title container-ssm mt-lg-0 mt-4">
            También puedes instalar de forma manual
          </p>
          <p className="mt-3 activation-code-txt">Código de activación manual</p>

          <div className="manual-activation-code d-flex justify-content-center flex-wrap mt-4">
            <div className="manual-code code-ios d-flex flex-column align-items-center justify-content-center justify-content-md-between">
              <h4 className="mb-2">iOs</h4>
              <p id="ios-code">{data.manualActivationiOS}</p>
              <button
                className="mt-3 btn-activation-code d-flex align-items-center"
                onClick={() => copyToClipboard(data.manualActivationiOS)}
              >
                Copiar
                {copiedCode === data.manualActivationiOS && (
                  <i className="fas fa-check animated-check"></i>
                )}
              </button>
            </div>

            <div className="manual-code code-ios d-flex flex-column align-items-center justify-content-center justify-content-md-between">
              <h4 className="mb-2 mb-md-0">Android</h4>
              <p id="android-code">{data.manualActivationAndroid}</p>
              <button
                className="mt-3 btn-activation-code d-flex text-center align-items-center"
                onClick={() => copyToClipboard(data.manualActivationAndroid)}
              >
                Copiar
                {copiedCode === data.manualActivationAndroid && (
                  <i className="fas fa-check animated-check"></i>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivacionESIM;