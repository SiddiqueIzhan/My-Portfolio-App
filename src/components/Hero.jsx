import resume from "../../public/Siddique Izhan V K Full Stack Resume.pdf";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const socialIcons = {
  Email: MdEmail,
  LinkedIn: FaLinkedinIn,
  GitHub: FaGithub,
  Twitter: FaXTwitter,
};

const socialLinks = [
  [
    "✉",
    "Email",
    "https://mail.google.com/mail/?view=cm&fs=1&to=izhanvk@gmail.com",
  ],
  [
    "in",
    "LinkedIn",
    "https://www.linkedin.com/in/v-k-mohammed-siddique-izhan-8b98a0188/",
  ],
  ["gh", "GitHub", "https://github.com/SiddiqueIzhan"],
  ["tw", "Twitter", "https://x.com/IzhanVk16298"],
];

export default function Hero() {
  return (
    <section
      id="top"
      className="grid items-center gap-12 pt-[120px] pb-[90px] text-center lg:grid-cols-[1.1fr_1fr] lg:text-left"
    >
      <div>
        <span className="mb-[18px] block text-xs font-semibold uppercase tracking-[0.12em] text-accent">
          Welcome to my portfolio
        </span>
        <h1 className="font-heading text-[clamp(2.4rem,5vw,3.6rem)] font-extrabold leading-[1.1]">
          Hi, I&apos;m Izhan
        </h1>
        <p className="mt-2 font-heading text-[clamp(1.3rem,2.6vw,1.7rem)] font-bold">
          <span className="gradient-text">Frontend Developer</span>{" "}
          <span>→</span>{" "}
          <span className="gradient-text">Full-Stack in progress</span>
        </p>
        <p className="mx-auto mt-5 max-w-[440px] text-[0.98rem] text-muted lg:mx-0">
          I build fast, accessible interfaces with React and Next.js, based in
          Bengaluru — and I&apos;m extending up the stack into Node, Express,
          and databases so I can ship features end to end.
        </p>
        <a
          className="mt-8 inline-block rounded-full bg-warm-gradient px-[30px] py-[14px] font-heading text-sm font-bold text-canvas shadow-[0_14px_30px_rgba(180,99,43,0.35)] transition hover:-translate-y-[2px]"
          href={resume}
          download="Siddique Izhan V K Full Stack Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download My CV
        </a>
      </div>
      <div className="relative mx-auto h-[400px] w-[280px] sm:h-[480px] sm:w-[380px]">
        <div className="absolute inset-x-[-10%] bottom-[-6%] top-[30%] rounded-[42%_58%_65%_35%/45%_45%_55%_55%] bg-warm-gradient" />
        <div className="absolute -bottom-[6%] -left-[8%] -z-10 h-[70px] w-[110px] opacity-30 [background-image:radial-gradient(#b9a488_1.4px,transparent_1.4px)] [background-size:13px_13px]" />
        <img
          className="absolute bottom-0 left-1/2 z-10 h-[107%] max-w-none -translate-x-1/2 drop-shadow-[0_26px_36px_rgba(15,9,5,0.5)]"
          src="/ChatGPT Image Aug 12, 2026, 02_12_33 PM (1).png"
          alt="Siddique Izhan"
        />
        {socialLinks.map(([, name, href], index) => {
          const Icon = socialIcons[name];

          return (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={name}
              className={`absolute z-20 grid size-11 place-items-center rounded-full bg-cream text-sm font-bold text-surface shadow-lg ${["right-[-2%] top-[36%]", "right-[-2%] top-[55%]", "right-[-2%] top-[74%]", "right-[9%] top-[91%]"][index]}`}
            >
              <Icon className="size-5" aria-hidden="true" />
            </a>
          );
        })}
      </div>
    </section>
  );
}
