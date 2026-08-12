const education = [
  [
    "🎓",
    "B.Tech, Electronics & Communication Engineering",
    "Presidency University, Bengaluru · 2018 – 2022 · CGPA 7.23/10",
  ],
];
const jobs = [
  [
    "💼",
    "Application Engineer",
    "MediBuddy · May 2025 – Oct 2025 · Bengaluru, KA",
  ],
  [
    "💼",
    "Software Development Engineer",
    "Chingari · Jun 2023 – May 2025 · Bengaluru, KA",
  ],
];
function Timeline({ title, items }) {
  return (
    <div>
      <h3 className="mb-[26px] font-heading text-xl font-extrabold">
        {title[0]} <span className="text-accent">{title[1]}</span>
      </h3>
      <div className="relative space-y-7 border-l-2 border-cream/10 pl-9">
        {items.map(([icon, role, meta]) => (
          <div className="relative" key={role}>
            <span className="absolute -left-[53px] grid size-10 place-items-center rounded-full border border-cream/10 bg-surface text-base text-accent">
              {icon}
            </span>
            <h4 className="font-bold">{role}</h4>
            <p className="mt-1 text-sm text-muted">{meta}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default function Experience() {
  return (
    <section
      id="experience"
      className="reveal grid gap-11 py-20 md:grid-cols-2 md:gap-15"
    >
      <Timeline title={["Academic", "Qualification"]} items={education} />
      <Timeline title={["Job", "Experience"]} items={jobs} />
    </section>
  );
}
