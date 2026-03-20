export type Project = {
  name: string;
  live: string;
  repo: string;
  note: string;
};



export const projects: Project[] = [
  {
    name: "Swahili Bob Tattoo",
    live: "https://swahili-bob-tattoo.onrender.com",
    repo: "https://github.com/justus-ai/swahili_bob_tattoo",
    note: "Full-stack app (deployed on Render).",
  },
  {
    name: "Amazing Food",
    live: "https://amazing-food-jept.onrender.com",
    repo: "https://github.com/justus-ai/amazing_food",
    note: "Full-stack app (deployed on Render).",
  },
  {
    name: "Gift Appy",
    live: "https://gift-appy.onrender.com/",
    repo: "https://github.com/justus-ai/gift-appy",
    note: "Hackathon project — Dec 2022.",
  },
  {
    name: "Leksands Outdoor Workout",
    live: "https://justus-ai.github.io/leksands-oudoor-workout/",
    repo: "https://github.com/justus-ai/leksands-oudoor-workout",
    note: "Static site (GitHub Pages).",
  },
  {
    name: "Swenglish",
    live: "https://justus-ai.github.io/swenglish/",
    repo: "https://github.com/justus-ai/swenglish",
    note: "Static site (GitHub Pages).",
  },
];