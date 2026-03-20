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
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
        </div>

        <div>
          <h1>Justus Marwa</h1>
          <p>
            <code>Junior Fullstack Developer</code>
          </p>

          <p style={{ marginTop: 12 }}>
            I build web apps and small products. Below are a few projects I’ve deployed.
          </p>

          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {skills.map((s) => (
              <span
                key={s}
                className="rounded-full border border-zinc-700/40 bg-zinc-900/10 px-3 py-1 text-sm text-zinc-200"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <h2>Projects</h2>
          <p>Live demos + code</p>

          <ul
            className="mt-6 grid gap-3 text-left"
            style={{ listStyle: "none", padding: 0, margin: 0 }}
          >
            {projects.map((p) => (
              <li
                key={p.live}
                className="rounded-xl border border-zinc-700/40 bg-zinc-900/10 px-4 py-3"
              >
                <div className="font-medium text-zinc-100">{p.name}</div>
                <div className="mt-1 text-sm text-zinc-400">{p.note}</div>

                <div className="mt-3 flex flex-wrap gap-2">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-lg bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-900 hover:bg-white"
                    style={{ textDecoration: "none" }}
                  >
                    Live
                  </a>

                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-lg border border-zinc-700/50 px-3 py-1.5 text-sm font-medium text-zinc-100 hover:bg-zinc-900/20"
                    style={{ textDecoration: "none" }}
                  >
                    Code
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div id="social">
          <h2>Contact</h2>
          <p>Find me here</p>

          <ul>
            {links.map((l) => (
              <li key={l.url}>
                <a href={l.url} target="_blank" rel="noreferrer">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}