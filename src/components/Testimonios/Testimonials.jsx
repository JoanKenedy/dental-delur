import Testimonio1 from "../../assets/testimonio-1.png";
import Testimonio2 from "../../assets/testimonio-2.png";
import Testimonio3 from "../../assets/testimonio-3.png";
import Testimonio4 from "../../assets/testimonio-4.png";
import { Link } from "react-router-dom";
import { FaQuoteLeft } from "react-icons/fa";
import { GiRoundStar } from "react-icons/gi";
export const Testimonials = () => {
  const TESTIMONIOS = [
    {
      id: 1,
      nameTestimonio: "Emma Ortiz",
      testimonio:
        "Siempre satisfecha de la atención recibida la doctora amable en todo momento,se ha encargado de mantener mi rostro rejuvecido,estoy encantada de su nueva sucursal que es más cerca de mi domicilio pero sin dudar iba más lejos como en anteriores ocasionesya que su servicio es excelente 👌",
      imgPerfil: Testimonio1,
    },
    {
      id: 2,
      nameTestimonio: "Cristina Mendoza",
      testimonio:
        "Excelente servicio, muy profesionales y atentas sobre todo con los pacientes pequeños que puedan tener temor de los dentistas.Muy recomendables las dras Monica & Montserrat.",
      imgPerfil: Testimonio2,
    },
    {
      id: 3,
      nameTestimonio: "Jaz Gonzalez",
      testimonio:
        "Recomendadicima. La doctora Moni es una profesional su trabajo es de 10/10 es amable y muy atenta con los niños. A mí hijo le hizo coronillas dentales, tapado de caries y cirugía lingual todo perfecto",
      imgPerfil: Testimonio3,
    },
    {
      id: 4,
      nameTestimonio: "Claudia Yuset Urzúa Flores",
      testimonio:
        "Excelente, servicio las dos doctoras te tratan super bien y son muy profesionales, apartir de hoy serán mis dentistas favoritas",
      imgPerfil: Testimonio4,
    },
  ];
  return (
    <>
      <div className="testimonials w-full px-4 py-6">
        <h2 className="title-slider text-xl font-bold text-center uppercase md:text-3xl md:px-5">
          Escucha lo que nuestros pacientes satisfechos tienen que decir.
        </h2>
        <div className="container-testimonials max-w-6xl p-4 grid gap-4 md:m-auto md:grid-cols-2">
          {TESTIMONIOS.map((testimonio, i) => (
            <div
              className="item-testimonials bg-slate-100 border my-5 flex flex-col gap-2 cursor-pointer  md:px-10 md:gap-3 relative p-3 rounded-md shadow-lg shadow-gray-300"
              key={i}
            >
              <FaQuoteLeft className="absolute right-7 top-0  text-3xl md:text-5xl text-slate-300 " />
              <div className="calificaciones flex">
                <GiRoundStar className="text-yellow-500 text-xl md:text-2xl" />
                <GiRoundStar className="text-yellow-500 text-xl md:text-2xl" />
                <GiRoundStar className="text-yellow-500 text-xl md:text-2xl" />
                <GiRoundStar className="text-yellow-500 text-xl md:text-2xl" />
                <GiRoundStar className="text-yellow-500 text-xl md:text-2xl" />
              </div>
              <p className="text-justify">{testimonio.testimonio}</p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonio.imgPerfil}
                  alt=""
                  className="w-14 h-14 object-cover"
                />
                <h3 className="font-medium">{testimonio.nameTestimonio}</h3>
              </div>
            </div>
          ))}
        </div>
        <Link
          to="https://www.google.com/search?q=dental+delur+PLAZA+ARIA%2C+Calle+Sta.+Cruz+del+Valle+1433%2C+Valle+de+la+misecordia%2C+45615+San+Pedro+Tlaquepaque%2C+Jal.&oq=dental+delur+PLAZA+ARIA%2C+Calle+Sta.+Cruz+del+Valle+1433%2C+Valle+de+la+misecordia%2C+45615+San+Pedro+Tlaquepaque%2C+Jal.&gs_lcrp=EgRlZGdlKgYIABBFGDkyBggAEEUYOTIICAEQABgWGB4yCggCEAAYgAQYogQyCggDEAAYgAQYogQyCggEEAAYgAQYogQyCggFEAAYgAQYogQyBggGEEUYPDIGCAcQRRg8MgYICBBFGDzSAQgzNjY1ajBqMagCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x842f4d0e6bc8862f:0x4b2f46fdf62a834d,1,,,,"
          target="_blank"
          className="block m-auto w-[70%] bg-header text-white text-base p-3 text-center rounded-xl md:w-[20%]"
        >
          Ver todas las opiniones
        </Link>
      </div>
    </>
  );
};
