import { useState } from "react";
import SectionHeading from "./SectionHeading";
export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const submit = (event) => {
    event.preventDefault();
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\n\n${form.message}`,
    );
    window.location.href = `https://mail.google.com/mail/?view=cm&fs=1&to=izhanvk%40gmail.com&su=Portfolio%20Contact&body=${body}`;
  };
  const update = (event) =>
    setForm({ ...form, [event.target.name]: event.target.value });
  const fieldClass =
    "w-full rounded-[10px] border-0 bg-cream/90 px-4 py-[14px] text-sm text-surface placeholder:text-surface/60";
  return (
    <section id="contact" className="reveal pt-[120px]">
      <SectionHeading
        centered
        eyebrow="Let's build something"
        title={
          <>
            Connect <span className="gradient-text">With Me</span>
          </>
        }
        description="Feel free to reach out directly by email, or fill in the form and I'll get back to you."
      />
      <div className="grid gap-10 rounded-3xl bg-warm-gradient p-[30px] md:grid-cols-[.8fr_1.2fr] md:p-11">
        <div className="text-canvas/85">
          <h3 className="mb-4 font-heading text-lg font-bold text-canvas">
            Get in touch
          </h3>
          <p className="text-sm font-semibold">Email: izhanvk@gmail.com</p>
        </div>
        <form onSubmit={submit} className="grid gap-[14px]">
          <div className="grid gap-[14px] sm:grid-cols-2">
            <input
              className={fieldClass}
              name="name"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={update}
            />
            <input
              className={fieldClass}
              name="phone"
              type="tel"
              placeholder="Your Phone Number"
              value={form.phone}
              onChange={update}
            />
          </div>
          <input
            className={fieldClass}
            name="email"
            type="email"
            placeholder="Your Email"
            required
            value={form.email}
            onChange={update}
          />
          <textarea
            className={`${fieldClass} min-h-25 resize-y`}
            name="message"
            placeholder="Your Message"
            required
            value={form.message}
            onChange={update}
          />
          <button className="rounded-[10px] bg-canvas p-[14px] font-heading text-sm font-bold text-cream transition hover:bg-surface-2">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
