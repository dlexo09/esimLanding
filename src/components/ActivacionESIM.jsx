import "./ActivacionESIM.css";

const ActivacionESIM = () => {
  // Función para copiar texto al portapapeles
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Código copiado al portapapeles");
    }).catch((err) => {
      console.error("Error al copiar el texto: ", err);
    });
  };

  return (
    <div className="activation-container mt-5">
      <h4 className="container-sm text-center"> Instala tu E-sim escaneando el código QR
        desde la configuración de su dispositivo móvil.</h4>

      <div className="row  align-items-center justify-content-center mt-3">
        <div className="col-md-5 qr-activation-code justify-content-end d-flex align-items-center">
          <img src="/public/img/qr-img.png" alt="QR" />
        </div>

        <div className="col-md-6 manual-activation-code-container text-center">
          <p className="activation-code-txt container-ssm">También puedes instalar de forma manual</p>
          <p className="activation-code-txt mt-3">Código de activación manual</p>

          <div className="manual-activation-code d-flex justify-content-center flex-wrap mt-4">
            <div className="manual-code code-ios d-flex flex-column align-items-center justify-content-between">
              <h4 className="mb-2">iOs</h4>
              <p id="ios-code">nghsd832hnesdu82054j ndf65784hnksfc8235hna dij8245j3nkjfcnhfeu8853 nfkcssnky58</p>
              <button className="mt-3 btn-activation-code" onClick={() => copyToClipboard("nghsd832hnesdu82054jndf65784hnksfc8235hnadij8245j3nkjfcnhfeu8853nfkcssnky58")}>
                Copiar
              </button>
            </div>

            <div className="manual-code code-ios d-flex flex-column align-items-center justify-content-between">
              <h4>Android</h4>
              <p id="android-code">ed73278bjdcau23nkcsbj 4jnkduh734iuah djbn3874623</p>
              <button className="mt-3 btn-activation-code" onClick={() => copyToClipboard("ied73278bjdcau23nkcsbjhq772634jnkduh734iuahdjbn3874623")}>
                Copiar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivacionESIM;
