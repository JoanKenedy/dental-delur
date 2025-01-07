import { Descripcion } from "../components/Implantologia/Descripcion";
import { Implanto } from "../components/Implantologia/Implanto";
import { Testimonios } from "../components/Implantologia/Testimonios";
import { ButtonFixed } from "../components/ButtonsFixed";
import { Contacto } from "../components/Contacto";

export const Implantologia = () => {
  return (
    <>
      <Implanto />
      <Descripcion />
      <Testimonios />
      <Contacto />
      <ButtonFixed />
    </>
  );
};
