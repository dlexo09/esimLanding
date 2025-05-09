import DatosCuenta from "../components/DatosCuenta";
import ActivacionESIM from "../components/ActivacionESIM";
import PasosInstalcion from "../components/PasosInstalcion";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

const LandingESIM = () => {
  return (
    <>
      <div className="pt-5">
        <DatosCuenta />
        <ActivacionESIM />
        <PasosInstalcion />
        <FAQ />
        <Footer />
      </div>
    </>
  );
};

export default LandingESIM;
