import { Hero } from "../components/Nosotros/Hero";
import { Contacto } from "../components/Contacto";
import { Parrallax } from "../components/Nosotros/Parallax";

import { CallToAction } from "../components/CallToAction";
import { ButtonFixed } from "../components/ButtonsFixed";
import { Galery } from "../components/Nosotros/Galery";
import { Faqs } from "../components/Faqs";

export const Nosotros = () => {
  return (
    <>
      <Hero />
      <Parrallax />

      <Galery />
      <Faqs />
      <CallToAction />
      <Contacto />
      <ButtonFixed />
    </>
  );
};
