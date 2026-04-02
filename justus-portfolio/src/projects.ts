export type Project = {
  name: string;
  live: string;
  repo: string;
  note: string;
  category: "projects" | "hackathons";
  stack: string;
};



export const projects: Project[] = [
  {
    name: "Amigo Rentals",
    live: "https://https-github-com-amigo-rentals-justus.onrender.com/",
    repo: "https://github.com/justus-ai/https-github.com-justus-ai-amigo-rentals",
    note: "React and Next.js rental app deployed on Render.",
    category: "projects",
    stack: "React • Next.js",
  },
  {
    name: "Swahili Bob Tattoo",
    live: "https://swahili-bob-tattoo.onrender.com",
    repo: "https://github.com/justus-ai/swahili_bob_tattoo",
    note: "Full-stack app (deployed on Render).",
    category: "projects",
    stack: "Django • Stripe • Auth • PostgreSQL • HTML • CSS",
  },
  {
    name: "Amazing Food",
    live: "https://amazing-food-jept.onrender.com",
    repo: "https://github.com/justus-ai/amazing_food",
    note: "Full-stack app (deployed on Render).",
    category: "projects",
    stack: "Python • JavaScript • HTML • CSS • Bootstrap",
  },
  {
    name: "Gift Appy",
    live: "https://gift-appy.onrender.com/",
    repo: "https://github.com/justus-ai/gift-appy",
    note: "Hackathon project — Dec 2022.",
    category: "hackathons",
    stack: "Hackathon — Dec 2022",
  },
  {
    name: "Leksands Outdoor Workout",
    live: "https://justus-ai.github.io/leksands-oudoor-workout/",
    repo: "https://github.com/justus-ai/leksands-oudoor-workout",
    note: "Static site (GitHub Pages).",
    category: "projects",
    stack: "HTML • CSS",
  },
  {
    name: "Swenglish",
    live: "https://justus-ai.github.io/swenglish/",
    repo: "https://github.com/justus-ai/swenglish",
    note: "Static site (GitHub Pages).",
    category: "projects",
    stack: "HTML • CSS • JavaScript",
  },
  {
    name: "React Portfolio Preview (WIP)",
    live: "https://personalportfolio-hbc7.onrender.com/",
    repo: "https://github.com/justus-ai/personalPortfolio",
    note: "React portfolio deployed on Render.",
    category: "projects",
    stack: "React • Vite • Render",
  },
];