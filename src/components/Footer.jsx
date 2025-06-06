import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer-container mt-5">
            <div className="container pt-5 pb-5">
                <h2 className="subtitle-special text-center mb-4">¿Dudas?</h2>
                <div className="contact-container">

                    <div className="contact-section">
                        <p>Desde tu línea Mega móvil marca al *1234</p>
                    </div>
                    <div className="contact-section">
                        <p className="mt-2">Whatsapp <a className="links-txt" href="https://api.whatsapp.com/send?phone=523396900001&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Mega%20m%C3%B3vil." target="_blank">33 9690 0001</a></p>
                    </div>
                    
                    <div className="contact-section">
                        <p className="mt-2"> Atención telefónica <a className="links-txt" href="tel:33 9690 0000">33 9690 0000</a></p>
                    </div>

                    <div className="contact-section">
                        <p className="mt-2"><a className="links-txt" href="mailto:atencionclientes@megacable.com.mx">atencionclientes@megacable.com.mx</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer;
