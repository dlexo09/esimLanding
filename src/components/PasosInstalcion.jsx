import "./PasosInstalcion.css";

const PasosInstalcion = () => {
    return (
        <div className="container mt-5">
            <div className="text-center">
                <h2>¿Como la instalo?</h2>
                <p className="mt-3 instalation-sbtitle"> Sigue estos sencillos pasos para instalar tu eSIM.</p>
            </div>

            <div className="instalation-steps">
                <div className="instalation-step">
                    <img src="" alt="" />
                    <p>Conéctate a una red WiFi estable</p>
                </div>

                <div className="instalation-step">
                    <img src="" alt="" />
                    <p> Ve a configuración en tu dispositivo</p>
                </div>

                <div className="instalation-step">
                    <img src="" alt="" />
                    <p>Escanea el código QR o copia y pega los códigos manualmente.</p>
                </div>

                <div className="instalation-step">
                    <img src="" alt="" />
                    <p>¡Listo! Configura tu E-Sim</p>
                </div>
            </div>



        </div>
    );
};
export default PasosInstalcion;
