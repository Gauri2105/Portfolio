import { motion } from "framer-motion";
import { timelineData } from "../../data/timeline";

import {
    FaBriefcase,
    FaBullseye,
    FaGraduationCap,
    FaRocket,
} from "react-icons/fa";

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Education":
      return "bg-violet-500";
    case "Experience":
      return "bg-emerald-500";
    case "Project":
      return "bg-sky-500";
    case "Goal":
      return "bg-orange-500";
    default:
      return "bg-slate-500";
  }
};

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Education":
      return <FaGraduationCap />;
    case "Experience":
      return <FaBriefcase />;
    case "Project":
      return <FaRocket />;
    case "Goal":
      return <FaBullseye />;
    default:
      return null;
  }
};

const Journey = () => {
  return (
    <section
      id="journey"
      className="bg-slate-950 px-6 py-24"
    >
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-4 text-center text-4xl font-bold"
        >
          My Journey
        </motion.h2>

        <p className="mb-16 text-center text-slate-400">
          From student to full stack developer,
          continuously learning and building.
        </p>

        <div className="relative">

          <div className="absolute left-5 top-0 h-full w-1 rounded-full bg-slate-800" />

          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -50 : 50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
              }}
              className="relative mb-12 ml-16"
            >

              <div
                className={`absolute -left-[54px] top-4 flex h-10 w-10 items-center justify-center rounded-full text-white ${getCategoryColor(
                  item.category
                )}`}
              >
                {getCategoryIcon(item.category)}
              </div>

              <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg">

                <div className="mb-4 flex flex-wrap items-center gap-3">

                  <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-sky-400">
                    {item.year}
                  </span>

                  <span
                    className={`rounded-full px-3 py-1 text-sm text-white ${getCategoryColor(
                      item.category
                    )}`}
                  >
                    {item.category}
                  </span>

                </div>

                <h3 className="text-xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  {item.description}
                </p>

              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;