import { HERO } from "../Data";
import personimg from "../assets/person.png";
const Hero = () => {
  return (
    <section className="flex flex-wrap min-h-screen items-center ">
      {/* Left Div */}
      <div className="w-full md:w-1/2">
        <h2 className="my-8 p-2 font-bold lg:text[7rem] md:text-5xl text-4xl">
          {HERO.name}
        </h2>
        <p className="p-2 text-3xl lg:text-4xl">{HERO.greet}</p>
        <p className="mb-8 p-2 text-xl">{HERO.description}</p>
      </div>

      {/* Right Div */}
      <div className="w-full md:w-1/2 lg:p-8">
        <div className="flex justify-center">
          <img
            className="rounded-3xl w-96 shadow-md shadow-red-400"
            src={personimg}
            width={450}
            height={450}
            alt="ahmad"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
