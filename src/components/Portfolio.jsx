import SectionHeading from "./SectionHeading";
const projects = [
  [
    "Full-stack",
    "Doctor Appointment Platform",
    "Book appointments, consult via video, and manage your healthcare journey on one secure platform.",
    ["Next.js", "SQL", "Clerk"],
    "/doctor-appointment-app.png",
    "https://doctors-appointment-mesfewyu1-izhanvkgmailcoms-projects.vercel.app/",
  ],
  [
    "Frontend",
    "Task Management System",
    "Feature-rich task manager with Firebase auth, drag-and-drop, search, filtering, and Kanban/list views.",
    ["React", "Firebase"],
    "/project image 1.jpeg",
    "https://my-task-mang-app.netlify.app/",
  ],
  [
    "Frontend",
    "Food Delivery App",
    "Swiggy-inspired ordering app with mobile-first design, carousel animations, and optimized performance.",
    ["React", "Tailwind CSS"],
    "/food delivery ss.png",
    "https://my-food-delivery-app.netlify.app/",
  ],
  [
    "Full-stack",
    "MERN Chat App",
    "Real-time messaging for one-on-one and group conversations, built on the MERN stack.",
    ["MongoDB", "Express", "React", "Node.js"],
    "/chat-app-image.png",
    "https://mern-chat-app-9plp.onrender.com/",
  ],
  [
    "Frontend",
    "Dice Game App",
    "Casual browser dice game built to explore state logic and playful UI interaction.",
    ["JavaScript"],
    "/project image 3.png",
    "https://dice-game-app1.netlify.app/",
  ],
];
export default function Portfolio() {
  return (
    <section id="portfolio" className="reveal pt-[120px]">
      <SectionHeading
        centered
        eyebrow="Selected work"
        title={
          <>
            My <span className="gradient-text">Portfolio</span>
          </>
        }
        description="A few recent projects — click through to see the code and a live demo."
      />
      <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
        {projects.map(([role, title, desc, tags, image, link]) => (
          <article
            className="overflow-hidden rounded-[18px] border border-cream/10 bg-surface"
            key={title}
          >
            <img
              src={image}
              alt=""
              className="aspect-[16/10] w-full bg-warm-gradient object-cover object-top"
            />
            <div className="p-[22px] pb-[26px]">
              <span className="text-xs font-bold uppercase tracking-[.06em] text-accent">
                {role}
              </span>
              <h3 className="mt-2 font-heading text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm text-muted">{desc}</p>
              <div className="my-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    className="rounded-full bg-surface-2 px-[10px] py-1 text-xs text-muted"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={link}
                className="text-sm font-semibold text-accent transition hover:text-cream"
              >
                View project →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
