import Nosotros from "../../assets/inicio/inicio-presentacion.jpeg";
export const About = () => {
  return (
    <>
      <div className="about">
        <div className="container-about py-10 px-5 flex flex-col-reverse gap-5 md:flex-row-reverse md:m-auto md:max-w-7xl md:py-16">
          <div className="item-about md:px-20 md:flex md:flex-col md:justify-center  md:gap-2  flex flex-col  ">
            <h3 className=" title-about text-change md:text-4xl uppercase   ">
              Dental Delur
            </h3>
            <h4 className="font-semibold  text-change text-xl md:text-xl">
              Tu salud bucal, nuestra prioridad.
            </h4>
            <p className="text-justify text-sm md:text-base my-3">
              En Dental Delur, somos un equipo de profesionales apasionados por
              la salud y bienestar oral. Nuestra misión es brindar atención
              odontológica integral y personalizada a toda la familia, con
              especialización en pacientes nerviosos y odontopediatría.
            </p>
            <h4 className="font-semibold text-change text-xl md:text-xl">
              Nuestros valores
            </h4>
            <ul className="list-disc px-4 text-sm  md:text-base">
              <li>Compromiso con la calidad y la innovación</li>
              <li>Atención personalizada y empática</li>
              <li>Honestidad y transparencia en todos nuestros servicios</li>
              <li>
                Respeto y cuidado por la salud y bienestar de nuestros pacientes
              </li>
            </ul>
            <a
              href="tel:3333178188"
              target="_blank"
              className="bg-header-change text-white text-center mt-4 inline-block rounded-md w-36 py-2 text-base md:py-2 md:w-40"
            >
              Contacto
            </a>
          </div>
          <div className="item-about md:ml-14">
            <img
              src={Nosotros}
              alt=""
              className="md:max-w-[500px] md:max-h-[500px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};
