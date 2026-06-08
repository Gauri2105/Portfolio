import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import { experienceData } from "../../data/experience";

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-slate-900 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-4 text-center text-4xl font-bold"
        >
          Professional Experience
        </motion.h2>

        <p className="mb-16 text-center text-slate-400">
          Building real-world applications and solving business problems through modern web technologies.
        </p>

        <div className="space-y-10">

          {experienceData.map((job, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
              }}
              className="rounded-2xl border border-slate-800 bg-slate-950 p-8"
            >
              <div className="mb-6 flex flex-wrap items-center gap-4">

                <div className="rounded-full bg-sky-500 p-3 text-white">
                  <FaBriefcase />
                </div>

                <div>
                  <h3 className="text-2xl font-bold">
                    {job.role}
                  </h3>

                  <p className="text-sky-400">
                    {job.company}
                  </p>
                </div>

              </div>

              <div className="mb-6 flex flex-wrap gap-3">

                <span className="rounded-full bg-slate-800 px-4 py-2 text-sm">
                  {job.duration}
                </span>

                <span className="rounded-full bg-emerald-600 px-4 py-2 text-sm">
                  {job.type}
                </span>

              </div>

              <ul className="mb-8 space-y-3 text-slate-300">
                {job.achievements.map((item, idx) => (
                  <li key={idx}>
                    • {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                {job.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="rounded-full border border-slate-700 px-3 py-2 text-sm text-sky-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Experience;