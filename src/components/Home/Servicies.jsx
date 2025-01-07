import Servicio1 from "../../assets/tratamientos/odontopediatria.jpeg";
import Servicio2 from "../../assets/tratamientos/ortodoncia.jpeg";
import Servicio4 from "../../assets/endodoncia.webp";
import Servicio5 from "../../assets/tratamientos/armonizacion-facial.jpg";
import Servicio6 from "../../assets/tratamientos/cirugia-maxi.webp";
import Servicio7 from "../../assets/tratamientos/implantes-dentales.jpg";
import Servicio8 from "../../assets/periodoncia.webp";
import { Link } from "react-router-dom";

export const Servicies = () => {
  const Servicios = [
    {
      id: 1,
      title: "Odontopediatría",
      imgSrc: Servicio1,
      link: "/odontopediatria",
    },
    {
      id: 2,
      title: "Ortodonica",
      imgSrc: Servicio2,
      link: "/ortodoncia",
    },
    {
      id: 3,
      title: "Implantología dental",
      imgSrc: Servicio7,
      link: "/implantologia",
    },
    {
      id: 4,
      title: "Armonización facial",
      imgSrc: Servicio5,
      link: "/armonizacion-facial",
    },
    {
      id: 5,
      title: "Endodoncia",
      imgSrc: Servicio4,
      link: "/endodoncia",
    },

    {
      id: 6,
      title: "Cirugía maxilofacial",
      imgSrc: Servicio6,
      link: "/cirugia-maxilofacial",
    },

    {
      id: 7,
      title: "Periodoncia",
      imgSrc: Servicio8,
      link: "/periodoncia",
    },
  ];
  return (
    <>
      <section
        className="servicios w-full pt-8 pb-4 px-5 md:pt-12 md:pb-4 "
        id="servicios"
      >
        <h2 className="text-2xl font-bold text-change text-center uppercase md:text-3xl">
          Nuestros Servicios
        </h2>
        <div className="container-servicios grid grid-rows-7 place-items-center gap-4 md:grid-cols-3 my-5  md:max-w-7xl md:m-auto md:gap-5 md:grid-rows-3 md:my-4">
          {Servicios.map((servicio, i) => (
            <Link to={servicio.link}>
              <div
                className="item-servicios flex flex-col justify-center"
                key={i}
              >
                <div className="container relative">
                  <img
                    src={servicio.imgSrc}
                    alt=""
                    className="max-h-full rounded-lg"
                    style={{ aspectRatio: "16/10" }}
                  />

                  <div className="pantalla-servicios absolute bottom-0 lef-0 h-[30px] w-full md:opacity-0 md:hover:opacity-100 md:h-full md:duration-200  flex justify-center items-center">
                    <p className="text-white">{servicio.title}</p>
                  </div>
                </div>
                <button className="bg-cyan-600 w-[150px] mx-auto my-3 text-white py-2 rounded-lg">
                  Saber más
                </button>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};
