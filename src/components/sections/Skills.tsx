const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "Angular",
      "React",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "SCSS",
      "Tailwind CSS",
      "Bootstrap",
      "Ionic",
    ],
  },

  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "RBAC",
      "WebSockets",
      "MVC Architecture",
    ],
  },

  {
    title: "Database",
    skills: [
      "MongoDB",
      "MySQL",
      "MariaDB",
    ],
  },

  {
    title: "Cloud & DevOps",
    skills: [
      "AWS",
      "Azure AZ-900",
      "Docker",
      "Git",
      "GitHub",
      "Linux",
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-slate-950 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">

        <h2 className="mb-4 text-center text-4xl font-bold">
          Skills & Technologies
        </h2>

        <p className="mb-16 text-center text-slate-400">
          Technologies and tools used across web,
          mobile and backend development.
        </p>

        <div className="grid gap-8 md:grid-cols-2">

          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <h3 className="mb-6 text-xl font-bold text-sky-400">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-700 px-3 py-2 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;