import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="flex min-h-screen items-center px-6 pt-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-3 text-lg text-sky-400">Hello, I'm</p>

          <h1 className="mb-4 text-5xl font-bold leading-tight md:text-7xl">
            Gauri Gujar
          </h1>

          <h2 className="mb-6 text-2xl text-slate-300 md:text-3xl">
            Full Stack Developer
          </h2>

          <p className="max-w-xl text-lg leading-8 text-slate-400">
            Full Stack Developer specializing in modern web and mobile
            applications with hands-on experience in Angular, React, Ionic,
            Node.js, MySQL and MongoDB.
            <br />
            <br />
            Delivered real-world solutions including GPS-based School Bus
            Tracking Systems, Shopify-powered applications, Salon Management
            platforms and Digital Wallet solutions while continuously exploring
            Cloud Computing, DevOps and AI technologies.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-sky-500 px-6 py-3 font-medium text-white"
            >
              View Projects
            </a>

            <a
              href="/resume/Gauri_Gujar_Resume.pdf"
              download
              className="rounded-xl border border-slate-700 px-6 py-3 font-medium transition hover:border-sky-400"
            >
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex gap-6 text-3xl">
            <a
              href="https://github.com/Gauri2105"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 transition hover:text-sky-400"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/gaurigujar"
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 transition hover:text-sky-400"
            >
              <FaLinkedin />
            </a>
          </div>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-4">
              <h3 className="text-2xl font-bold text-sky-400">2+</h3>
              <p className="text-sm text-slate-400">Years Experience</p>
            </div>

            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-4">
              <h3 className="text-2xl font-bold text-sky-400">4+</h3>
              <p className="text-sm text-slate-400">Major Projects</p>
            </div>

            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-4">
              <h3 className="text-2xl font-bold text-sky-400">50+</h3>
              <p className="text-sm text-slate-400">REST APIs</p>
            </div>

            <div className="rounded-xl border border-slate-700 bg-slate-900/50 p-4">
              <h3 className="text-2xl font-bold text-sky-400">AZ-900</h3>
              <p className="text-sm text-slate-400">Certified</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-sky-500 opacity-20 blur-3xl" />

            <img
              src={`${import.meta.env.BASE_URL}profile.png`}
              alt="Gauri Gujar"
              className="relative h-[320px] w-[320px] rounded-full border-4 border-sky-400 object-cover shadow-[0_0_80px_rgba(56,189,248,0.4)] md:h-[420px] md:w-[420px]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
