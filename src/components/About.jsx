export default function About() {
  return (
    <section
      id="about"
      className="reveal grid items-center gap-14 pt-[120px] lg:grid-cols-[.8fr_1.2fr]"
    >
      <div className="relative aspect-[4/5] rounded-3xl border border-cream/10 bg-[url('/aboutme.png')] bg-cover bg-center before:absolute before:-bottom-[14px] before:-left-[14px] before:-right-[14px] before:-top-[14px] before:-z-10 before:rounded-3xl before:bg-warm-gradient before:opacity-55" />
      <div>
        <span className="section-eyebrow">Get to know me</span>
        <h2 className="mt-[10px] font-heading text-3xl font-extrabold">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="mt-[18px] max-w-[520px] text-muted">
          I&apos;m a Frontend Developer with 2+ years of experience building
          responsive, high-performance web apps with React.js and Next.js. I
          care about clean UX, fast interfaces, and code that&apos;s easy to
          maintain.
        </p>
        <p className="mt-[14px] max-w-[520px] text-muted">
          Right now I&apos;m expanding into full-stack development — Node.js,
          Express, and databases — so I can own a feature from the interface all
          the way down to the data layer.
        </p>
        <a
          className="mt-7 inline-block rounded-full bg-warm-gradient px-[22px] py-3 font-heading text-sm font-bold text-canvas"
          href="#portfolio"
        >
          View My Work →
        </a>
      </div>
    </section>
  );
}
