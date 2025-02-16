import Ortodoncia1 from "../../assets/operatoria/caso-1.png";
import Ortodoncia2 from "../../assets/operatoria/caso-2.png";
import Ortodoncia3 from "../../assets/operatoria/caso-3.png";

export const Testimonios = () => {
  const CASO1 = [
    {
      id: 1,
      image: Ortodoncia1,
      alt: "Primer caso de éxito",
    },
    {
      id: 2,
      image: Ortodoncia2,
      alt: "Primer caso de éxito",
    },
    {
      id: 3,
      image: Ortodoncia3,
      alt: "Primer caso de éxito",
    },
  ];
  return (
    <>
      <div className="testimonio">
        <div className="container-testimonios px-5 md:max-w-6xl py-5 md:m-auto">
          <div className="item-testimonios">
            <h3 className="title-slider text-change text-center text-2xl  uppercase  md:text-3xl  px-5">
              Casos de éxito
            </h3>
            <div className="casos grid mt-4 gap-2 md:grid-cols-4 ">
              {CASO1.map((caso, index) => (
                <div className="item-casos" key={index}>
                  <img src={caso.image} alt={caso.alt} className="max-w-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
