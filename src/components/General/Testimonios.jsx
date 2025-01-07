import Ortodoncia5 from "../../assets/odontopediatria/foto-1.jpeg";
import Ortodoncia6 from "../../assets/odontopediatria/foto-2.jpeg";
import Ortodoncia7 from "../../assets/odontopediatria/foto-3.jpeg";
import Ortodoncia8 from "../../assets/odontopediatria/foto-4.jpeg";

export const Testimonios = () => {
  const CASO1 = [
    {
      id: 5,
      image: Ortodoncia5,
      alt: "Caso 3",
    },
    {
      id: 6,
      image: Ortodoncia6,
      alt: "Caso 3",
    },
    {
      id: 7,
      image: Ortodoncia7,
      alt: "Caso 3",
    },
    {
      id: 8,
      image: Ortodoncia8,
      alt: "Caso 3",
    },
  ];
  return (
    <>
      <div className="testimonio">
        <div className="container-testimonios px-5 md:max-w-6xl py-5 md:m-auto">
          <div className="item-testimonios">
            <h3 className="title-slider text-center text-2xl  uppercase  md:text-3xl  px-5">
              Nuestro trabajo
            </h3>
            <div className="casos grid gap-2 mt-4 md:grid-cols-4 ">
              {CASO1.map((caso, index) => (
                <div className="item-casos" key={index}>
                  {caso.image != "" ? (
                    <img
                      src={caso.image}
                      className="max-w-full hover:scale-90 duration-500"
                    />
                  ) : (
                    <video src={caso.vidio} controls></video>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
