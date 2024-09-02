import { EXPERIENCES } from '../Data';
import ExperienceItem from './ExperienceItem';

const Experience = () => {
  return (
    <section className="p-6 max-w-4xl pt-20 mx-auto "id='work'>
      <h2 className="text-3xl font-bold text-center mb-8">Experience</h2>
      <div className="space-y-6">
        {EXPERIENCES.map((experience) => (
          <ExperienceItem
            key={experience.id}
            title={experience.title}
            company={experience.company}
            timePeriod={experience.timePeriod}
            description={experience.description}
            img={experience.img}
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
