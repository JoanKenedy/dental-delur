import Team2 from "../../assets/team-1.webp";
import Team3 from "../../assets/team-2.webp";
import Team4 from "../../assets/team-3.webp";
import Team5 from "../../assets/team-4.webp";

export const Team = () => {
  const EQUIPO = [
    {
      id: 1,
      doctor: Team2,
      alt: "Carla Hernández",
      especialidad: "Endodoncista",
    },
    {
      id: 2,
      doctor: Team3,
      alt: "Paola Álvarez",
      especialidad: "Ortodoncista",
    },
    {
      id: 3,
      doctor: Team4,
      alt: "Raúl Canul",
      especialidad: "Periodoncista",
    },
    {
      id: 4,
      doctor: Team5,
      alt: "Daniel Salvatierra",
      especialidad: "Endodoncista",
    },
  ];
  return (
    <>
      <div className="team py-4">
        <h2 className="title-slider text-center text-change text-xl  uppercase  md:text-3xl frase my-2">
          Nuestros especialistas
        </h2>
        <div className="container-team grid gap-4 md:grid-cols-4  md:m-auto md:gap-5 md:max-w-6xl">
          {EQUIPO.map((team, index) => (
            <div className="item-team overflow-hidden relative" key={index}>
              <img
                src={team.doctor}
                alt={team.alt}
                className=" img-instalacion max-w-full md:hover:scale-125"
              />
              <div className="date-doctors absolute bottom-0 left-0 w-full bg-black text-center ">
                <h3 className="text-white">{team.alt}</h3>
                <span className="text-white text-sm">{team.especialidad}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
