import "./PasosInstalcion.css";

const PasosInstalcion = () => {
    return (
        <div className="container installation-steps-container">
            <div className="text-center">
                <h2>¿Cómo la instalo?</h2>
                <p className="mt-3 installation-sbtitle">Sigue estos sencillos pasos para instalar tu eSIM.</p>
            </div>

            <div className="installation-steps d-flex flex-wrap justify-content-center mt-5 text-center">
                <div className="installation-step">
                    <img src="./img/step-1.png" alt="Paso 1" />
                    <p>Conéctate a una red WiFi estable</p>
                </div>

                <div className="installation-step">
                    <img src="./img/step-2.png" alt="Paso 2" />
                    <p>Ve a configuración en tu dispositivo</p>
                </div>

                <div className="installation-step">
                    <img src="./img/step-3.png" alt="Paso 3" />
                    <p>Escanea el código QR o copia y pega los códigos manualmente.</p>
                </div>

                <div className="installation-step">
                    <img src="./img/step-4.png" alt="Paso 4" />
                    <p>¡Listo! Configura tu E-Sim</p>
                </div>
            </div>

            <div className="row align-items-center guide-activation-container">
                <h3 className="col-lg-5 text-center text-lg-end mb-3 mb-lg-0">Guías de activación</h3>
                <div className="col-lg-5 installation-guides d-flex flex-wrap justify-content-center mt-4">
                    <div className="guide-installation text-center ">
                        <h4 className="mb-2">iOS</h4>
                        <button className="mt-3 btn-activation-code">Descargar</button>
                    </div>
                    <div className="guide-installation text-center">
                        <h4 className="mb-2">Android</h4>
                        <button className="mt-3 btn-activation-code">Descargar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PasosInstalcion;
