import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const socialIcons = {
  LinkedIn: FaLinkedinIn,
  GitHub: FaGithub,
  Twitter: FaXTwitter,
};

const socials = [
  [
    "in",
    "LinkedIn",
    "https://www.linkedin.com/in/v-k-mohammed-siddique-izhan-8b98a0188/",
  ],
  ["gh", "GitHub", "https://github.com/SiddiqueIzhan"],
  ["tw", "Twitter", "https://x.com/IzhanVk16298"],
];
export default function Footer() {
  return (
    <footer className="border-t border-cream/10 py-10 pb-[50px]">
      <div className="flex flex-wrap justify-between gap-[30px]">
        <div>
          <h4 className="mb-[14px] text-xs uppercase tracking-[.08em] text-muted">
            Quick Links
          </h4>
          {[
            ["About Me", "#about"],
            ["Skills & Certifications", "#skills"],
            ["Portfolio", "#portfolio"],
          ].map(([label, href]) => (
            <a
              className="mb-2 block text-sm transition hover:text-accent"
              key={href}
              href={href}
            >
              {label}
            </a>
          ))}
        </div>
        <div>
          <h4 className="mb-[14px] text-xs uppercase tracking-[.08em] text-muted">
            Follow Me On
          </h4>
          <div className="flex gap-3">
            {socials.map(([, name, href]) => {
              const Icon = socialIcons[name];

              return (
                <a
                className="grid size-9 place-items-center rounded-full border border-cream/10 bg-surface text-xs transition hover:bg-accent hover:text-canvas"
                href={href}
                aria-label={name}
                target="_blank"
                rel="noreferrer"
                key={name}
              >
                  <Icon className="size-4" aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mt-[34px] border-t border-cream/10 pt-5 text-xs text-muted">
        © {new Date().getFullYear()} Siddique Izhan
      </div>
    </footer>
  );
}
