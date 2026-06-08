import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-slate-900 px-6 py-24"
    >
      <div className="mx-auto max-w-4xl text-center">

        <h2 className="mb-4 text-4xl font-bold">
          Let's Connect
        </h2>

        <p className="mb-12 text-slate-400">
          Open to exciting opportunities, collaborations and
          technology discussions.
        </p>

        <div className="flex flex-wrap justify-center gap-6">

          <a
            href="mailto:gujargauri00@gmail.com"
            className="rounded-xl border border-slate-700 px-6 py-4 hover:border-sky-400"
          >
            <FaEnvelope className="mx-auto mb-2 text-2xl" />
            Email
          </a>

          <a
            href="https://linkedin.com/in/gaurigujar"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-slate-700 px-6 py-4 hover:border-sky-400"
          >
            <FaLinkedin className="mx-auto mb-2 text-2xl" />
            LinkedIn
          </a>

          <a
            href="https://github.com/Gauri2105"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-slate-700 px-6 py-4 hover:border-sky-400"
          >
            <FaGithub className="mx-auto mb-2 text-2xl" />
            GitHub
          </a>

        </div>

      </div>
    </section>
  );
};

export default Contact;