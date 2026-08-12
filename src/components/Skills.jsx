import SectionHeading from "./SectionHeading";
const skills = [
  ["JavaScript", 90],
  ["React.js", 85],
  ["Next.js", 80],
  ["Tailwind CSS", 85],
  ["TypeScript", 75],
  ["Redux", 75],
  ["Node.js & Express", 60],
  ["MongoDB & SQL", 60],
];
export default function Skills() {
  return (
    <section id="skills" className="reveal py-20">
      <SectionHeading eyebrow="What I bring" title="Skills & Certifications" />
      <div className="grid gap-x-[50px] gap-y-[26px] md:grid-cols-2">
        {skills.map(([name, value]) => (
          <div key={name}>
            <div className="mb-2 flex justify-between text-sm ">
              <span className="font-semibold">{name}</span>
              <span className="font-semibold text-accent">{value}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-surface-2">
              <div
                className="h-full rounded-full bg-warm-gradient"
                style={{ width: `${value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="mb-[18px] mt-10 text-sm text-muted">
        No certifications added yet — drop in your real ones and I&apos;ll turn
        these into filled cards.
      </p>
      <div className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2].map((card) => (
          <div
            className="grid aspect-[4/3] place-items-center rounded-[14px] border-2 border-dashed border-cream/10 text-center text-sm text-muted"
            key={card}
          >
            <div>
              <span className="block text-2xl text-accent">+</span>Add
              certification
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
