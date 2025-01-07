import SliderCompu from "../../assets/nosotros/hero-compu-nosotros.webp";
import SliderCel from "../../assets/nosotros/hero-movil-nosotros.jpg";

import { SuperHero } from "../SuperHero";
export const Hero = () => {
  return (
    <>
      <SuperHero bgCel={SliderCel} bgCompu={SliderCompu} textCategoria={"Nosotros"} />
    </>
  );
};
