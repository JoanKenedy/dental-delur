import { Cirugia } from "../components/Cirugia/Cirugia";
import { Contacto } from "../components/Contacto";
import { Descripcion } from "../components/Cirugia/Descripcion";
import { ButtonFixed } from "../components/ButtonsFixed";

export const CirugiaMaxilofacial = () => {
  return (
    <>
      <Cirugia />
      <Descripcion />

      <Contacto />
      <ButtonFixed />
    </>
  );
};
