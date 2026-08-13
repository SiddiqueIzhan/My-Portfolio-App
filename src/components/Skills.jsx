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

const certifications = [
  {
    issuer: "OpenAI",
    title: "AI Foundations",
    description:
      "Certificate of completion for the OpenAI AI Foundations course.",
    file: "/OpenAI AI foundation certificate.pdf",
  },
  {
    issuer: "Anthropic",
    title: "Claude 101",
    description:
      "Certificate of completion for the Anthropic Claude 101 course.",
    file: "/Antropic Claude 101 Certificate.pdf",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="reveal pt-[120px]">
      <SectionHeading eyebrow="What I bring" title="Skills & Certifications" />
      <div className="grid gap-x-[50px] gap-y-[26px] md:grid-cols-2">
        {skills.map(([name, value]) => (
          <div key={name}>
            <div className="mb-2 flex justify-between text-sm">
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

      <div className="mt-10 grid gap-7 md:grid-cols-2">
        {certifications.map(({ issuer, title, description, file }) => (
          <article
            className="overflow-hidden rounded-[18px] border border-cream/10 bg-surface transition hover:-translate-y-1 hover:border-accent/50"
            key={title}
          >
            <div className="aspect-[16/7]">
              <iframe
                className="pointer-events-none h-full w-full border-0"
                src={`${file}#toolbar=0&navpanes=0&scrollbar=0`}
                title={`${issuer} ${title} certificate preview`}
              />
            </div>
            <div className="p-[22px] pb-[26px]">
              <span className="text-xs font-bold uppercase tracking-[.06em] text-accent">
                {issuer}
              </span>
              <h3 className="mt-2 font-heading text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm text-muted">{description}</p>
              <a
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:text-cream"
                href={file}
                target="_blank"
                rel="noreferrer"
              >
                View certificate <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
