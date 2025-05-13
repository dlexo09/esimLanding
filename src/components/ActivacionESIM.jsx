import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ActivacionESIM.css";

const ActivacionESIM = () => {
  const [data, setData] = useState(null);
  const [copiedCode, setCopiedCode] = useState("");
  const [loading, setLoading] = useState(true);
  const [imgError, setImgError] = useState(false);
  const { token } = useParams();

  useEffect(() => {
    if (!token) return;

    fetch(`https://tkn-act.megacable.com.mx:6238/api/token/mvno/${token}`, {
      headers: {
        Authorization: "Basic bWVnYUlUOjQ3MjNCQzVFQkY2NjRBMQ==", // Reemplaza por tu valor real
      },
    })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error al cargar los datos:", error));
  }, [token]);

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopiedCode(text);
        setTimeout(() => setCopiedCode(""), 2000);
      })
      .catch((err) => {
        console.error("Error al copiar el texto: ", err);
      });
  };

  if (!data) {
    return <p>Cargando datos...</p>;
  }

  // Validar y armar el src base64 del QR
  const qrBase64 = data.activation.qrCode.startsWith("data:image")
    ? data.activation.qrCode
    : `data:image/png;base64,${data.activation.qrCode}`;

  return (
    <div className="container activation-code-container">
      <h4 className="container-sm text-center mb-5">
        Instala tu E-sim escaneando el código QR desde la configuración de su
        dispositivo móvil.
      </h4>

      <div className="row activation-container d-flex align-items-center justify-content-center mt-3">
        <div className="col-lg-5 qr-activation-code justify-content-center d-flex align-items-center">
          {imgError ? (
            <p>Error al cargar el QR.</p>
          ) : (
            <>
              {loading && <p>Cargando QR...</p>}
              <img
                src={qrBase64}
                alt="QR"
                style={{ display: loading ? "none" : "block" }}
                onLoad={() => setLoading(false)}
                onError={() => {
                  setLoading(false);
                  setImgError(true);
                }}
              />
            </>
          )}
        </div>

        <div className="col-lg-6 manual-activation-code-container text-center">
          <p className="activation-code-title container-ssm mt-lg-0 mt-4">
            También puedes instalar de forma manual
          </p>

          <div className="manual-activation-code d-flex justify-content-center flex-wrap mt-4">
            <div className="manual-code d-flex flex-column align-items-center justify-content-center justify-content-md-between">
              <p className="mt-3 activation-code-txt">
                Código de activación manual: <br /><br />
              </p>
              
              <p id="android-code">{data.activation.android}</p>
              <button
                className="mt-3 btn-activation-code d-flex text-center align-items-center"
                onClick={() => copyToClipboard(data.activation.android)}
              >
                Copiar
                {copiedCode === data.activation.android && (
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
