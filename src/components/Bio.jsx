import { BIO } from "../Data"; // Assuming 'BIO' is an array of bio strings

const Bio = () => {
  return (
    <section className="py-10 pt-20  " id="bio">
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Bio</h2>
        <div className="flex flex-col gap-4 text-lg sm:text-xl leading-relaxed max-w-4xl mx-auto">
          {BIO.map((bio, index) => (
            <p
              key={index}
              className={`p-4 rounded-md shadow-md  -z-50 ${bio.style}`}
            >
              {bio.paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bio;
