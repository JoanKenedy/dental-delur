import { useEffect, useState } from "react";
import FAQS from "../assets/img-faqs.jpg";
import { IoIosArrowDown } from "react-icons/io";

export const Faqs = () => {
  const [selected, setSelected] = useState(null);

  const toogle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  const PREGUNTAS = [
    {
      id: 1,
      pregunta: "¿Cuántas veces al día debo cepillarme los dientes?",
      respuesta:
        "Lavarse los dientes diariamente es fundamental para prevenir problemas como la caries y las enfermedades de las encías. Es recomendable cepillarse, mínimo, dos veces al día, una por la mañana y otra antes de acostarse, aunque lo ideal es hacerlo después de cada comida. Asegúrate de utilizar un cepillo de cerdas suaves y una pasta dental con flúor para conseguir una limpieza más efectiva.",
    },
    {
      id: 2,
      pregunta: "¿Es normal que las encías sangren durante el cepillado?",
      respuesta:
        "No, las encías que sangran durante el cepillado pueden indicar que se está padeciendo alguna enfermedad periodontal. Lo normal es que sea gingivitis, que es el estado inicial y menos grave de la enfermedad. Si esto ocurre, es necesario informar y visitar al dentista para que pueda revisar el estado de las encías y proponer opciones de tratamiento.",
    },
    {
      id: 3,
      pregunta: "¿El hilo dental es realmente necesario?",
      respuesta:
        "Sí, el uso del hilo dental es totalmente necesario en la rutina diaria de higiene oral. Su importancia radica en que, solo el cepillado, no puede llegar bien a todos los rincones entre los dientes y a la línea de las encías. El hilo dental ayuda a eliminar mejor la placa y los restos de comida que puede irse acumulando, reduciendo así el riesgo de caries y de problemas en las encías.",
    },
    {
      id: 4,
      pregunta: "¿Cuándo debo llevar a mi hijo al dentista por primera vez?",
      respuesta:
        "La primera visita de un niño al dentista debe programarse, aproximadamente, seis meses después de la erupción del primer diente, que suele ser alrededor del primer año de vida. Estas visitas tempranas no solo ayudan a controlar la salud dental de los más pequeños desde el principio, sino que también familiarizan al niño con la experiencia en consulta de una manera positiva. ",
    },
  ];

  return (
    <>
      <section className="w-full">
        <div className="container-section-faqs px-4 py-4 md:max-w-7xl md:m-auto">
          <h2 className=" font-semibold text-change text-2xl md:text-4xl">
            Preguntas Frecuentes
          </h2>
          <div className="faqs w-full md:grid md:grid-cols-2 gap-2  py-4">
            <div className="item-faqs hidden md:block  ">
              <img
                src={FAQS}
                alt=""
                className="max-w-[100%] md:h-[400px] md:w-[550px] object-cover rounded-lg"
              />
            </div>
            <div className="item-faqs w-full  md:flex md:items-center md:justify-center ">
              <div className="w-full flex flex-col gap-4 md:gap-4 ">
                {PREGUNTAS.map((item, i) => (
                  <div className="w-full">
                    <div
                      className="flex w-full question bg-header text-white justify-between items-center text-sm md:text-base cursor-pointer  p-3 rounded-lg"
                      onClick={() => toogle(i)}
                    >
                      <p>{item.pregunta}</p>
                      <IoIosArrowDown
                        className={`${
                          selected == i ? "rotate-180" : "rotate-0"
                        } duration-500 text-lg `}
                      />
                    </div>
                    <p
                      className={`${
                        selected == i ? "efecto " : "respuesta  "
                      } w-full text-sm md:text-sm  mt-2  text-justify px-2`}
                    >
                      {item.respuesta}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
