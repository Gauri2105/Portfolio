import { FaGithub, FaHeart, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-6 py-10">
      <div className="mx-auto max-w-6xl">

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          <div>
            <h3 className="text-xl font-bold text-white">
              Gauri Gujar
            </h3>

            <p className="mt-2 text-slate-400">
              Full Stack Developer | Angular • React • Node.js
            </p>
          </div>

          <div className="flex gap-5 text-2xl">

            <a
              href="https://github.com/Gauri2105"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-sky-400"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/gaurigujar"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-sky-400"
            >
              <FaLinkedin />
            </a>

          </div>

        </div>

        <div className="mt-8 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">

          <p>
            Built with React, TypeScript and Tailwind CSS
          </p>

          <p className="mt-2 flex items-center justify-center gap-2">
            Made with <FaHeart className="text-red-500" /> by Gauri Gujar
          </p>

          <p className="mt-2">
            © {new Date().getFullYear()} Gauri Gujar. All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;