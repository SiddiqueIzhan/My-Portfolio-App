const links = [
  ["About Me", "#about"],
  ["Skills & Certifications", "#skills"],
  ["Portfolio", "#portfolio"],
  ["Experience", "#experience"],
];

export default function NavBar() {
  return (
    <nav className="sticky top-0 z-50 bg-canvas/85 backdrop-blur">
      <div className="page-wrap flex items-center justify-between py-[22px]">
        <a
          href="#top"
          className="flex items-center gap-[10px] font-heading text-lg font-bold"
        >
          <span className="grid size-[34px] place-items-center rounded-[10px] bg-warm-gradient text-sm font-extrabold text-canvas">
            I
          </span>
          Izhan
        </a>
        <div className="hidden gap-[34px] text-sm font-medium text-muted lg:flex">
          {links.map(([label, href]) => (
            <a className="transition hover:text-accent" href={href} key={href}>
              {label}
            </a>
          ))}
        </div>
        <a
          className="rounded-full bg-cream px-[22px] py-3 text-sm font-semibold text-surface transition hover:bg-accent"
          href="#contact"
        >
          Contact Me
        </a>
      </div>
    </nav>
  );
}
