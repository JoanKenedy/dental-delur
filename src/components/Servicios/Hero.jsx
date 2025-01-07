import Slider1 from "../../assets/servicio-2.webp";
import Slider4 from "../../assets/servicio-cel-2.webp";
import { SuperHero } from "../SuperHero";

export const Hero = () => {
  return (
    <>
      <SuperHero
        bgCel={Slider4}
        bgCompu={Slider1}
        textCategoria={"Servicios"}
      />
    </>
  );
};
