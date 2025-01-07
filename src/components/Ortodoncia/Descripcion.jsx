import { SuperDescripcion } from "../SuperDescripcion";
export const Descripcion = () => {
  const title = "¿Qué es la Ortodoncia?";
  const description =
    "Corrige los defectos de la posición dental para mantener una boca perfecta y sana. En Dental Delur, somos especialistas en ortodoncia y realizamos diferentes tipos de tratamientos para adaptarnos a tus necesidades.";
  return (
    <>
      <SuperDescripcion title={title} texto={description} />
    </>
  );
};
