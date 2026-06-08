import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="bg-slate-950 px-6 py-24"
    >
      <div className="mx-auto max-w-5xl">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12 text-center text-4xl font-bold"
        >
          About Me
        </motion.h2>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">

          <p className="mb-6 text-lg leading-8 text-slate-300">
            I'm Gauri Gujar, a Full Stack Developer based in Pune
            with experience building modern web and mobile
            applications using Angular, React, Ionic and Node.js.
          </p>

          <p className="mb-6 text-lg leading-8 text-slate-300">
            My journey started with Computer Science studies and
            evolved into developing real-world solutions including
            School Bus Tracking Systems, Shopify E-Commerce
            platforms, Salon Management applications and Digital
            Wallet solutions.
          </p>

          <p className="text-lg leading-8 text-slate-300">
            Beyond development, I actively explore Cloud
            Computing, DevOps, Artificial Intelligence and System
            Design to continuously improve my technical expertise
            and build scalable software solutions.
          </p>

        </div>

      </div>
    </section>
  );
};

export default About;