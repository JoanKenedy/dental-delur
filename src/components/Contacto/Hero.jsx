import { SuperHero } from "../SuperHero";
import Servicio1 from "../../assets/contacto.webp";
import Servicio2 from "../../assets/contacto-cel.webp";

export const Hero = () => {
  return (
    <>
      <SuperHero
        textCategoria={"Nuestras Ubicaciones"}
        bgCompu={Servicio1}
        bgCel={Servicio2}
      />
    </>
  );
};
