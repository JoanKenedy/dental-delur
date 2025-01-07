import { Hero } from "../components/Contacto/Hero";
import { InfoContacto } from "../components/Contacto/InfoContacto";
import { Contacto } from "../components/Contacto";
import { CallToAction } from "../components/CallToAction";
import { ButtonFixed } from "../components/ButtonsFixed";
import { Sucursales } from "../components/Contacto/Sucursales";

export const Ubicaciones = () => {
  return (
    <>
      <Hero />
      <Sucursales />
      <InfoContacto />
      <CallToAction />
      <Contacto />
      <ButtonFixed />
    </>
  );
};
