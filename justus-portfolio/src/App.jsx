import heroImg from "./assets/hero.png";
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
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-[-120px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute bottom-[-220px] right-[-160px] h-[520px] w-[520px] rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-5xl px-4 py-14 sm:py-16">
        {/* HERO */}
        <header className="text-center">
          <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-3 shadow-sm">
            <img
              src={heroImg}
              className="h-full w-full object-contain"
              width="170"
              height="179"
              alt="Portrait"
            />
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Justus Marwa
          </h1>

          <div className="mt-4 inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium text-zinc-200">
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
            <div className="mb-5 flex items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
                <p className="mt-1 text-sm text-zinc-400">Live demos + code</p>
              </div>

              <div className="text-sm text-zinc-400">{projects.length} projects</div>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2" style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {projects.map((p) => (
                <li
                  key={p.repo}
                  className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-white/20 hover:bg-white/10"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold leading-snug">{p.name}</h3>
                  </div>

                  <p className="mt-2 text-sm leading-relaxed text-zinc-300">{p.note}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-lg bg-zinc-100 px-3 py-2 text-sm font-semibold text-zinc-900 transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400/60"
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

            <ul className="mt-5 grid gap-2" style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {links.map((l) => (
                <li key={l.url}>
                  <a
                    href={l.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-zinc-950/20 px-4 py-3 text-sm font-medium text-zinc-100 transition hover:border-white/20 hover:bg-white/10"
                    style={{ textDecoration: "none" }}
                  >
                    <span>{l.label}</span>
                    <span className="text-zinc-400">↗</span>
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