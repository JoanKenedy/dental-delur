import Back from "../../assets/fondo-clinica.webp";
export const Parrallax = () => {
  return (
    <>
      <div
        className="parallax bg-black h-[400px] flex flex-col justify-center items-center bg-fixed bg-cover md:h-[700px]"
        style={{ backgroundImage: `url(${Back})` }}
      >
        <div className="container-parallax bg-white p-5 w-[90%] m-auto md:max-w-4xl md:px-8 md:py-10">
          <h2 className="text-center title-slider text-black text-2xl  uppercase  md:text-3xl frase mb-2">
            Nosotros
          </h2>
          <p className="text-justify text-sm md:text-lg">
            En {}
            <span className="text-center title-slider text-black text-xl  uppercase  md:text-3xl frase">
              Dental Delur
            </span>{" "}
            nos apasiona cuidar de tu salud bucal de manera integral y
            personalizada. Nuestro equipo de dentistas altamente capacitados y
            comprometidos ofrece un servicio cercano, profesional y de calidad,
            con el objetivo de brindarte una experiencia confortable y segura en
            cada visita.
          </p>
        </div>
      </div>
    </>
  );
};
