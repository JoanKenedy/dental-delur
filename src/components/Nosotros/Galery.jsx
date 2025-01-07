import foto1 from "../../assets/nosotros/galeria-1.jpeg";
import foto2 from "../../assets/nosotros/galeria-2.jpeg";
import foto3 from "../../assets/nosotros/galeria-3.jpeg";
import foto4 from "../../assets/nosotros/galeria-4.jpeg";
import foto5 from "../../assets/nosotros/galeria-5.jpeg";
import foto6 from "../../assets/nosotros/galeria-6.jpeg";
import foto7 from "../../assets/nosotros/galeria-7.jpeg";
import foto8 from "../../assets/nosotros/galeria-8.jpeg";

export const Galery = () => {
  let imagenesArray = [foto1, foto2, foto3, foto4, foto5, foto6, foto7, foto8];

  return (
    <>
      <div className="galery pb-5 pt-8">
        <div className="w-[90%] m-auto md:max-w-6xl">
          <h2 className="title-slider text-center text-change text-xl  uppercase  md:text-3xl frase my-2">
            Nuestro trabajo
          </h2>
          <ul className="container-galery ">
            {imagenesArray.map((image) => (
              <li
                key={image}
                className="item-galery overflow-hidden md:rounded-lg md:hover:scale-95 duration-700"
              >
                <img
                  src={image}
                  alt=""
                  className="w-full h-full rounded-lg object-cover  "
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
