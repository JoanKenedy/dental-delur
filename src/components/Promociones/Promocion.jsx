import Promo1 from "../../assets/promo-4.jpg";
import Promo2 from "../../assets/promo-2.jpg";
import Promo3 from "../../assets/promo-3.jpg";
import Promo4 from "../../assets/promo-1.jpg";
import Promo5 from "../../assets/promo-5.jpg";
import Promo6 from "../../assets/promo-6.jpg";

export const Promocion = () => {
  const imagenesPromo = [Promo1, Promo2, Promo3, Promo4, Promo5, Promo6];

  return (
    <>
      <section className="w-full py-8 " id="promociones">
        <h2 className="text-2xl text-change font-bold text-center uppercase md:text-3xl mb-3">
          Nuestras promociones
        </h2>
        <div className="container-promos w-[90%] m-auto grid gap-4 md:grid-cols-2 md:max-w-6xl">
          {imagenesPromo.map((img) => {
            return (
              <figure>
                <img
                  src={img}
                  alt=""
                  className="max-w-[100%] md:hover:scale-95 duration-500 rounded-lg shadow-lg shadow-slate-400"
                />
              </figure>
            );
          })}
        </div>
      </section>
    </>
  );
};
