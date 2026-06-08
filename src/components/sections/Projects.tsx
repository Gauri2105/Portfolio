import { motion } from "framer-motion";
import { projectsData } from "../../data/projects";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Projects = () => {
  return (
    <section id="projects" className="bg-slate-950 px-4 md:px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-4 text-center text-4xl font-bold">
          Featured Projects
        </h2>

        <p className="mx-auto mb-20 max-w-3xl text-center text-slate-400">
          Real-world applications built across web, mobile and enterprise
          platforms.
        </p>

        <div className="space-y-32">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`grid items-center gap-8 lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Screenshot Carousel */}

              <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 p-4">
                <Swiper
                  modules={[Pagination]}
                  pagination={{
                    clickable: true,
                  }}
                  className="w-full"
                >
                  {project.screenshots.map((image, idx) => (
                    <SwiperSlide key={idx}>
                      <div className="flex h-[280px] md:h-[420px] lg:h-[500px] items-center justify-center">
                        <img
                          src={image}
                          alt={`${project.title} screenshot ${idx + 1}`}
                          className="max-h-full max-w-full rounded-xl object-contain"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Project Content */}

              <div className="flex flex-col justify-center">
                <span className="mb-2 text-sm font-semibold text-slate-500">
                  0{index + 1}
                </span>

                <span className="mb-3 text-sky-400">{project.category}</span>

                <h3 className="mb-6 text-2xl md:text-3xl font-bold">
                  {project.title}
                </h3>

                <p className="mb-8 break-words leading-7 text-slate-400">
                  {project.description}
                </p>

                <h4 className="mb-4 font-semibold text-white">Key Features</h4>

                <ul className="mb-8 space-y-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="text-slate-300">
                      • {feature}
                    </li>
                  ))}
                </ul>

                <div className="mb-8 flex flex-wrap gap-3">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="rounded-full border border-slate-700 px-3 py-2 text-sm text-sky-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="w-fit rounded-xl bg-sky-500 px-6 py-3 font-medium text-white transition hover:bg-sky-600"
                  >
                    View Source Code
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
