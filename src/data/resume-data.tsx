import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Simon Romero",
  initials: "SR",
  location: "Clovis, California, USA",
  locationLink: "https://www.google.com/maps/place/Clovis,+CA",
  about:
    "Recent graduate focused on building products with extra attention to detail",
  summary:
    "As a recent graduate, I am currently working on different personal projects to improve my skills and knowledge in software development. I am always looking for new opportunities to learn and grow as a developer.",
  avatarUrl: "https://media.licdn.com/dms/image/C5603AQHr55yRz4O6XA/profile-displayphoto-shrink_800_800/0/1650486831051?e=1721865600&v=beta&t=hlUIqxr3iYO1Gwf4dgK9JBpXlyc69H5H6untVU-JFLE",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "simonr.romero001@gmail.com",
    tel: "+15597706112",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/simonromero001",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/bjarocki/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/ramen_tonkatsu",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "California State University, Fresno",
      degree: "Bachelor's Degree in Computer Science",
      start: "2022",
      end: "2024",
    },
  ],
  skills: [
    "HTML/CSS",
    "PHP",
    "JavaScript",
    "TypeScript",
    "React/Next.js/Remix",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Heroku",
    "Vercel",
    "Figma",
    "C++",
    "C#",
    "Python",
    "Unreal Engine",
    "Unity",
    "Trello",
    "AWS"
  ],
  projects: [
    {
      title: "Anisong Vocab Guesser",
      techStack: [
        "TypeScript",
        "Next.js",
        "MongoDB",
        "Heroku",
        "AWS",
        "Vercel",
        "Figma",
      ],
      description: "Guess the vocab from your favorite anime songs",
      link: {
        label: "anisong-vocab-guesser.vercel.app/",
        href: "https://anisong-vocab-guesser.vercel.app/",
      },
    },
    {
      title: "Hololearn",
      techStack: [
        "TypeScript",
        "Next.js",
        "MongoDB",
        "Figma",
      ],
      description: "Guess the vocab using Hololive clips",
      link: {
        label: "github.com/simonromero001/Hololearn",
        href: "https://github.com/simonromero001/Hololearn",
      },
    },
    {
      title: "CSCI-130-Checkers",
      techStack: [
        "HTML/CSS",
        "JavaScript",
        "PHP",
        "MySQL",
      ],
      description: "Checkers!",
      link: {
        label: "github.com/simonromero001/CSCI-130-Checkers",
        href: "https://github.com/simonromero001/CSCI-130-Checkers",
      },
    },
    {
      title: "CSCI-130-Data-Browser",
      techStack: [
        "HTML/CSS",
        "JavaScript",
        "PHP",
        "MySQL",
      ],
      description: "A data browser for a database",
      link: {
        label: "github.com/simonromero001/CSCI-130-Data-Browser",
        href: "https://github.com/simonromero001/CSCI-130-Data-Browser",
      },
    },
    {
      title: "itch.io Games",
      techStack: [
        "Unity",
      ],
      description: "A collection of games I made",
      link: {
        label: "qubert48.itch.io",
        href: "https://qubert48.itch.io/",
      },
    },
  ],
} as const;
