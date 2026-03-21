import heroImg from "./assets/justus.jpg";
import "./App.css";
import { projects } from "./projects";

const links = [
  { label: "GitHub", url: "https://github.com/justus-ai" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/justus-marwa-79b9b658/" },
  { label: "Facebook", url: "https://www.facebook.com/justus.marwa" },
];

const skills = [
  "React",
  "JavaScript",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Tailwind CSS",
  "Git/GitHub",
];

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* subtle background glow */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-140px] h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-indigo-500/12 blur-3xl" />
        <div className="absolute bottom-[-260px] right-[-200px] h-[560px] w-[560px] rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        {/* HERO */}
       <div className="mx-auto mb-6 h-32 w-32 overflow-hidden rounded-full border border-white/15 bg-white/5 shadow-sm sm:h-36 sm:w-36">
  <img
    src={heroImg}
    className="h-full w-full object-contain p-2"
    alt="Portrait of Justus Marwa"
  />
</div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            <span className="bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent">
              Justus Marwa
            </span>
          </h1>

          <div className="mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-zinc-200">
            <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
            Junior Fullstack Developer
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
            I build web apps and small products. Below are a few projects I’ve deployed.
          </p>

          <div className="mx-auto mt-7 flex max-w-3xl flex-wrap justify-center gap-2">
            {skills.map((s) => (
              <span
                key={s}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-zinc-200"
              >
                {s}
              </span>
            ))}
          </div>
        </header>

        {/* divider */}
        <div className="my-12 h-px w-full bg-white/10" />

        {/* CONTENT */}
        <main className="grid gap-10 lg:grid-cols-3">
          {/* Projects */}
          <section className="lg:col-span-2">
            <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
                <p className="mt-1 text-sm text-zinc-400">Live demos + code</p>
              </div>

              <div className="text-sm text-zinc-400">{projects.length} projects</div>
            </div>

            <ul className="m-0 grid list-none gap-4 p-0 sm:grid-cols-2">
              {projects.map((p) => (
                <li
                  key={p.repo}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10 hover:shadow-lg hover:shadow-black/20"
                >
                  <h3 className="text-lg font-semibold leading-snug">{p.name}</h3>

                  <p className="mt-2 text-sm leading-relaxed text-zinc-300">{p.note}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-indigo-400 to-fuchsia-400 px-3 py-2 text-sm font-semibold text-zinc-950 transition hover:from-indigo-300 hover:to-fuchsia-300 focus:outline-none focus:ring-2 focus:ring-indigo-400/60"
                      style={{ textDecoration: "none" }}
                    >
                      Live
                    </a>

                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-transparent px-3 py-2 text-sm font-semibold text-zinc-100 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-400/60"
                      style={{ textDecoration: "none" }}
                    >
                      Code
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Contact */}
          <aside className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
            <p className="mt-1 text-sm text-zinc-400">Find me here</p>

            <ul className="mt-5 grid list-none gap-2 p-0">
              {links.map((l) => (
                <li key={l.url} className="group">
                  <a
                    href={l.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-zinc-950/20 px-4 py-3 text-sm font-medium text-zinc-100 transition hover:border-white/20 hover:bg-white/10 hover:shadow-lg hover:shadow-black/20"
                    style={{ textDecoration: "none" }}
                  >
                    <span>{l.label}</span>
                    <span className="text-zinc-400 transition group-hover:text-zinc-300">↗</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-xl border border-white/10 bg-zinc-950/20 p-4">
              <p className="text-sm text-zinc-300">
                Want to talk? Message me on LinkedIn and I’ll reply ASAP.
              </p>
            </div>
          </aside>
        </main>

        {/* footer divider */}
        <div className="my-12 h-px w-full bg-white/10" />

        <footer className="text-center text-sm text-zinc-400">
          © {new Date().getFullYear()} Justus Marwa
        </footer>
      </div>
    </div>
  );
}