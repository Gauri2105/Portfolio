const certifications = [
  {
    title: "Microsoft Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
  },
  {
    title: "Core Java Certification",
    issuer: "Training Program",
  },
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="bg-slate-950 px-6 py-24"
    >
      <div className="mx-auto max-w-4xl">

        <h2 className="mb-12 text-center text-4xl font-bold">
          Certifications
        </h2>

        <div className="space-y-6">

          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6"
            >
              <h3 className="text-xl font-bold">
                {cert.title}
              </h3>

              <p className="mt-2 text-slate-400">
                {cert.issuer}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Certifications;