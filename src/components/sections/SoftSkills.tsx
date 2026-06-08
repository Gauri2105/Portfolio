const softSkills = [
  "Continuous Learner",
  "Team Collaboration",
  "Communication Skills",
  "Adaptability",
  "Problem Solving",
  "Time Management",
  "Leadership",
  "Project Ownership",
];

const SoftSkills = () => {
  return (
    <section className="bg-slate-900 px-6 py-20">
      <div className="mx-auto max-w-5xl">

        <h2 className="mb-12 text-center text-4xl font-bold">
          Professional Strengths
        </h2>

        <div className="flex flex-wrap justify-center gap-4">

          {softSkills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-sky-500 px-5 py-3"
            >
              {skill}
            </span>
          ))}

        </div>

      </div>
    </section>
  );
};

export default SoftSkills;