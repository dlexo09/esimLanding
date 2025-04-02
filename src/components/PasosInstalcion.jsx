import "./PasosInstalcion.css";

const PasosInstalcion = () => {
    return (
        <div className="container mt-5">
            <div className="text-center">
                <h2>¿Cómo la instalo?</h2>
                <p className="mt-3 installation-sbtitle">Sigue estos sencillos pasos para instalar tu eSIM.</p>
            </div>

            <div className="installation-steps d-flex flex-wrap justify-content-center mt-4 text-center">
                <div className="installation-step">
                    <img src="https://picsum.photos/150/150?random=1" alt="Paso 1" />
                    <p>Conéctate a una red WiFi estable</p>
                </div>

                <div className="installation-step">
                    <img src="https://picsum.photos/150/150?random=2" alt="Paso 2" />
                    <p>Ve a configuración en tu dispositivo</p>
                </div>

                <div className="installation-step">
                    <img src="https://picsum.photos/150/150?random=3" alt="Paso 3" />
                    <p>Escanea el código QR o copia y pega los códigos manualmente.</p>
                </div>

                <div className="installation-step">
                    <img src="https://picsum.photos/150/150?random=4" alt="Paso 4" />
                    <p>¡Listo! Configura tu E-Sim</p>
                </div>
            </div>

            <div className="mt-5">
                <h3 className="text-center">Guías de activación</h3>
                <div className=" installation-guides d-flex flex-wrap justify-content-center mt-4">
                    <div className="guide-installation text-center">
                        <h4>iOS</h4>
                        <button className="mt-3 btn-activation-code">Descargar</button>
                    </div>
                    <div className="guide-installation text-center">
                        <h4>Android</h4>
                        <button className="mt-3 btn-activation-code">Descargar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PasosInstalcion;
