import { useEffect, useMemo, useRef, useState } from "react";
import heroImg from "./assets/justus.jpg";
import { projects } from "./projects";

const navItems = ["about", "resume", "portfolio"];

const services = [
  {
    title: "Hackathons",
    text: "Participating in Code Institute hackathons to collaborate, ship features quickly, and learn from teams.",
  },
  {
    title: "Portfolio & job search",
    text: "Improving my portfolio and projects with better documentation, demos, and interview-ready features.",
  },
  {
    title: "Continuous learning",
    text: "Taking LinkedIn Learning courses and building small projects to strengthen React and full-stack skills.",
  },
];

const education = [
  {
    title: "Diploma — Code Institute",
    years: "2021 — 2022",
    text: "Diploma in Full Stack Software Development (accredited).",
  },
  {
    title: "Bachelor of Business Administration and Management",
    years: "2006 — 2011",
    text: "Accredited by Northwood University.",
  },
];

const experience = [
  {
    title: "Forklift driver",
    years: "2020 — Present",
    text: "ICA warehouse, Borlänge",
  },
  {
    title: "Restaurant manager",
    years: "2018 — 2020",
    text: "Bastard Burgers, Liljeholmen, Stockholm",
  },
  {
    title: "Kitchen manager",
    years: "2013 — 2018",
    text: "Svenska Sushi Köket, Stockholm",
  },
];

const skills = [
  { name: "HTML", level: 80 },
  { name: "CSS", level: 70 },
  { name: "JavaScript", level: 90 },
  { name: "Python", level: 50 },
  { name: "Django", level: 65 },
  { name: "React", level: 55 },
];

const socials = [
  { name: "logo-github", url: "https://github.com/justus-ai", label: "GitHub" },
  { name: "logo-linkedin", url: "https://linkedin.com/in/justus-marwa-79b9b658/", label: "LinkedIn" },
  { name: "logo-facebook", url: "https://www.facebook.com/justus.marwa", label: "Facebook" },
];

const filterOptions = ["all", "projects", "hackathons"];

function TimelineSection({ icon, title, items }) {
  return (
    <section className="timeline">
      <div className="title-wrapper">
        <div className="icon-box">
          <ion-icon name={icon}></ion-icon>
        </div>
        <h3 className="h3">{title}</h3>
      </div>

      <ol className="timeline-list">
        {items.map((item) => (
          <li className="timeline-item" key={`${title}-${item.title}`}>
            <h4 className="h4 timeline-item-title">{item.title}</h4>
            <span>{item.years}</span>
            <p className="timeline-text">{item.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState("about");
  const [portfolioFilter, setPortfolioFilter] = useState("all");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [animateSkills, setAnimateSkills] = useState(false);
  const skillSectionRef = useRef(null);

  const filteredProjects = useMemo(() => {
    if (portfolioFilter === "all") return projects;
    return projects.filter((project) => project.category === portfolioFilter);
  }, [portfolioFilter]);

  useEffect(() => {
    if (activePage !== "resume") {
      setAnimateSkills(false);
      return undefined;
    }

    const skillSection = skillSectionRef.current;
    if (!skillSection) return undefined;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setAnimateSkills(true);
      return undefined;
    }

    if (!("IntersectionObserver" in window)) {
      setAnimateSkills(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setAnimateSkills(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(skillSection);

    return () => observer.disconnect();
  }, [activePage]);

  useEffect(() => {
    setIsFilterOpen(false);
  }, [portfolioFilter]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  return (
    <main>
      <aside className={`sidebar${isSidebarOpen ? " active" : ""}`}>
        <div className="sidebar-info">
          <figure className="avatar-box">
            <img src={heroImg} alt="Justus Marwa" />
          </figure>

          <div className="info-content">
            <h1 className="name" title="Justus Marwa">
              Justus Marwa
            </h1>
            <p className="title">Junior Full-Stack Developer</p>
          </div>

          <button className="info_more-btn" onClick={() => setIsSidebarOpen((open) => !open)} type="button">
            <span>{isSidebarOpen ? "Hide Contacts" : "Show Contacts"}</span>
            <ion-icon name="chevron-down"></ion-icon>
          </button>
        </div>

        <div className="sidebar-info_more">
          <div className="separator"></div>

          <ul className="contacts-list">
            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="mail-outline"></ion-icon>
              </div>

              <div className="contact-info">
                <p className="contact-title">Email</p>
                <a href="mailto:justusmwita@gmail.com" className="contact-link">
                  justusmwita@gmail.com
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="phone-portrait-outline"></ion-icon>
              </div>

              <div className="contact-info">
                <p className="contact-title">Phone</p>
                <a href="tel:+46700473996" className="contact-link">
                  +46 700 4xxxxx
                </a>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="calendar-outline"></ion-icon>
              </div>

              <div className="contact-info">
                <p className="contact-title">Birthday</p>
                <time dateTime="1984-03-11">Mar 11, 1984</time>
              </div>
            </li>

            <li className="contact-item">
              <div className="icon-box">
                <ion-icon name="location-outline"></ion-icon>
              </div>

              <div className="contact-info">
                <p className="contact-title">Location</p>
                <address>Insjön, Dalarna, Sweden</address>
              </div>
            </li>
          </ul>

          <div className="separator"></div>

          <ul className="social-list">
            {socials.map((social) => (
              <li className="social-item" key={social.label}>
                <a href={social.url} className="social-link" target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                  <ion-icon name={social.name}></ion-icon>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <div className="main-content">
        <nav className="navbar">
          <ul className="navbar-list">
            {navItems.map((item) => (
              <li className="navbar-item" key={item}>
                <button
                  className={`navbar-link${activePage === item ? " active" : ""}`}
                  onClick={() => setActivePage(item)}
                  type="button"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <article className={`about${activePage === "about" ? " active" : ""}`}>
          <header>
            <h2 className="h2 article-title">About me</h2>
          </header>

          <section className="about-text">
            <p>
              Junior full-stack developer based in Dalarna, Sweden. I build web applications using HTML, CSS, JavaScript,
              Python, and Django.
            </p>
            <p>
              I enjoy building production-style projects with authentication, databases, and payments (Stripe). Currently
              looking for a junior developer role where I can grow and contribute.
            </p>
          </section>

          <section className="featured-project">
            <h3 className="h3 service-title">Featured Project</h3>

            <div className="content-card featured-card">
              <h4 className="h4">Swahili Bob Tattoo</h4>
              <p className="featured-subtitle">Full-stack Django e-commerce website</p>

              <ul className="featured-bullets">
                <li>Django + PostgreSQL deployment (Render)</li>
                <li>User accounts + profiles (django-allauth)</li>
                <li>Stripe payments + bag/checkout flow</li>
              </ul>

              <div className="featured-actions">
                <a className="featured-btn" href="https://github.com/justus-ai/swahili_bob_tattoo" target="_blank" rel="noopener noreferrer">
                  GitHub Repo
                </a>
                <a
                  className="featured-btn featured-btn--primary"
                  href="https://swahili-bob-tattoo.onrender.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </section>

          <section className="service">
            <h3 className="h3 service-title">What I&apos;m doing</h3>

            <ul className="service-list">
              {services.map((service) => (
                <li className="service-item" key={service.title}>
                  <div className="service-icon-box"></div>

                  <div className="service-content-box">
                    <h4 className="h4 service-item-title">{service.title}</h4>
                    <p className="service-item-text">{service.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section className="testimonials">
            <h3 className="h3 testimonials-title">Testimonials</h3>

            <ul className="testimonials-list has-scrollbar">
              <li className="testimonials-item">
                <div className="content-card">
                  <figure className="testimonials-avatar-box"></figure>
                  <h4 className="h4 testimonials-item-title">Ulf Sunnanängs</h4>
                  <div className="testimonials-text">
                    <p>
                      Justus är en mycket trevlig ung man med stora sociala förmågor och är inte rädd för att lära sig nya
                      saker.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </section>
        </article>

        <article className={`resume${activePage === "resume" ? " active" : ""}`}>
          <header>
            <h2 className="h2 article-title">Resume</h2>
          </header>

          <TimelineSection icon="book-outline" title="Education" items={education} />
          <TimelineSection icon="briefcase-outline" title="Experience" items={experience} />

          <section className="skill" ref={skillSectionRef}>
            <h3 className="h3 skills-title">My skills</h3>

            <ul className="skills-list content-card">
              {skills.map((skill) => (
                <li className="skills-item" key={skill.name}>
                  <div className="title-wrapper">
                    <h5 className="h5">{skill.name}</h5>
                    <data value={skill.level}>{skill.level}%</data>
                  </div>
                  <div className="skill-progress-bg">
                    <div
                      className="skill-progress-fill"
                      style={{ width: animateSkills ? `${skill.level}%` : "0%" }}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </article>

        <article className={`portfolio${activePage === "portfolio" ? " active" : ""}`}>
          <header>
            <h2 className="h2 article-title">Portfolio</h2>
          </header>

          <section className="projects">
            <ul className="filter-list">
              {filterOptions.map((option) => (
                <li className="filter-item" key={`desktop-${option}`}>
                  <button
                    className={portfolioFilter === option ? "active" : ""}
                    onClick={() => setPortfolioFilter(option)}
                    type="button"
                  >
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                  </button>
                </li>
              ))}
            </ul>

            <div className="filter-select-box">
              <button className={`filter-select${isFilterOpen ? " active" : ""}`} onClick={() => setIsFilterOpen((open) => !open)} type="button">
                <div className="select-value">{portfolioFilter.charAt(0).toUpperCase() + portfolioFilter.slice(1)}</div>
                <div className="select-icon">
                  <ion-icon name="chevron-down"></ion-icon>
                </div>
              </button>

              <ul className="select-list">
                {filterOptions.map((option) => (
                  <li className="select-item" key={`mobile-${option}`}>
                    <button onClick={() => setPortfolioFilter(option)} type="button">
                      {option.charAt(0).toUpperCase() + option.slice(1)}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <ul className="project-list">
              {filteredProjects.map((project) => (
                <li className="project-item active" key={project.live}>
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <figure className="project-img">
                      <div className="project-item-icon-box">
                        <ion-icon name="eye-outline"></ion-icon>
                      </div>
                    </figure>
                    <h3 className="project-title">{project.name}</h3>
                    <p className="project-category">{project.stack}</p>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </article>
      </div>
    </main>
  );
}