const interests = [
  "Volleyball",
  "Traveling",
  "Photography",
  "Art & Painting",
];

const BeyondCoding = () => {
  return (
    <section className="bg-slate-900 px-6 py-20">
      <div className="mx-auto max-w-4xl text-center">

        <h2 className="mb-6 text-4xl font-bold">
          Beyond Coding
        </h2>

        <p className="mb-10 text-slate-400">
          Activities that help me stay creative,
          disciplined and continuously inspired.
        </p>

        <div className="flex flex-wrap justify-center gap-4">

          {interests.map((interest) => (
            <span
              key={interest}
              className="rounded-full border border-slate-700 px-5 py-3"
            >
              {interest}
            </span>
          ))}

        </div>

      </div>
    </section>
  );
};

export default BeyondCoding;