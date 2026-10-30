// Single source of truth for both the web page and the printable CV.
// This CV is public: client work is summarized, never listed client by client.

export type YearMonth = `${number}-${number}`

export interface Link {
  label: string
  href: string
  display: string
}

export interface Employer {
  company: string
  location: string
  role: string
  start: YearMonth
  end?: YearMonth
  about?: string
  description: string[]
  keywords?: string[]
}

// A project at Reaktor, described by what was built, never by who it was for.
export interface Project {
  title: string
  focus: string
  text: string
}

export interface TechGroup {
  name: string
  items: string[]
}

export const profile = {
  name: "Ákos Szokodi",
  title: "Software consultant",
  employer: "Reaktor",
  location: "Amsterdam, the Netherlands",
  headline: "Software consultant at Reaktor, based in Amsterdam 🌷",
  summary:
    "A pragmatic full-stack developer with a soft spot for software quality.",
  // The work itself lives under Experience; the intro is about how I work.
  intro: [
    "I am a pragmatic full-stack developer with a soft spot for software quality: clean code, solid design patterns, thorough testing, and thoughtful UX. I am fluent in TypeScript, Node.js, and React, and a polyglot at heart, so I let the problem pick the tool.",
    "I put the team first, building trust, joy, and great collaboration with a warm, lighthearted atmosphere and a steady supply of jokes.",
  ],
  updated: "October 2026",
}

export const links: Link[] = [
  {
    label: "Email",
    href: "mailto:szokodiakos+cv@gmail.com",
    display: "szokodiakos+cv@gmail.com",
  },
  {
    label: "GitHub",
    href: "https://github.com/szokodiakos",
    display: "github.com/szokodiakos",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/szokodiakos",
    display: "linkedin.com/in/szokodiakos",
  },
]

export const reaktor: Employer = {
  company: "Reaktor",
  location: "Amsterdam",
  role: "Software consultant",
  start: "2018-07",
  description: [
    "Build web, mobile, and backend software for global consumer brands, working inside the clients' own teams. Put a strong focus on code quality and team health, from testable architecture and frontend performance to facilitating standups and retrospectives.",
    "Since 2025, bring AI-assisted development with Claude into client teams: custom skills and subagents, agentic workflows, and day-to-day practices spread across the team.",
  ],
}

// Most recent first. No clients, industries, product names, or dates.
export const projects: Project[] = [
  {
    title: "Merchant ad activation",
    focus: "Backend, Kotlin",
    text: "Built the API behind a messaging-based flow that showed merchants their potential revenue uplift and let them launch a ready-to-go ad campaign with a single tap. Used agentic solutions throughout, from navigating dozens of repositories to setting up deployments and monitoring dashboards.",
  },
  {
    title: "Developer platform",
    focus: "Backend, Node.js and TypeScript",
    text: "Worked in the platform team behind a large developer portal. Refactored older parts of the codebase into a testable service layer architecture, with custom Claude skills and subagents applying the same blueprint automatically, and set the direction for how the team uses agentic workflows day to day.",
  },
  {
    title: "Ecommerce experimentation",
    focus: "Frontend, React",
    text: "Built customer-facing features for a large ecommerce site as A/B tests, reported on how each variant performed, and shipped the winners to production.",
  },
  {
    title: "Interactive planning boards",
    focus: "Frontend, React",
    text: "Built a presentation app where products are arranged on interactive boards, a PowerPoint and Excel hybrid with drag and drop, resizing, text formatting, a grid system, validation, and keyboard shortcuts. Put a strong focus on frontend performance.",
  },
  {
    title: "Cross-platform mobile apps",
    focus: "React Native, GraphQL",
    text: "Built apps for iOS and Android, including a social app with video and text posts, comments, likes, and livestreaming, and a data analytics app.",
  },
  {
    title: "Product data and payments",
    focus: "Backend, Kafka",
    text: "Laid the foundations for Kafka-based streaming of product and inventory data, replacing day-long batch runs. Later wired third-party payment providers into a checkout API.",
  },
]

export const technologies: TechGroup[] = [
  { name: "Languages", items: ["TypeScript", "JavaScript", "Kotlin"] },
  { name: "Frontend and mobile", items: ["React", "Next.js", "React Native"] },
  {
    name: "Backend and data",
    items: ["Node.js", "Spring", "Kafka", "PostgreSQL", "GraphQL"],
  },
  { name: "Cloud", items: ["AWS", "Kubernetes"] },
]

export const previous: Employer[] = [
  {
    company: "Coding Sans",
    location: "Budapest",
    role: "Software engineer",
    start: "2015-05",
    end: "2018-06",
    about:
      "A Budapest-based software agency that builds web and mobile apps for clients.",
    description: [
      "Developed full-stack applications for small to large companies, including a social network, a cloud-based healthcare management system, sports betting, a sales web and mobile app, an SMS marketing solution, and an email creator/editor. Authored a range of tech posts on the company blog.",
    ],
    keywords: [
      "JavaScript",
      "TypeScript",
      "React",
      "Angular",
      "Node.js",
      "PostgreSQL",
      "AWS",
    ],
  },
  {
    company: "Quanopt Ltd.",
    location: "Budapest",
    role: "Junior software engineer",
    start: "2013-06",
    end: "2014-08",
    about: "A Budapest-based data analytics startup.",
    description: [
      "Built a browser-based solution for saving, loading, and capturing data visualizations made with R and Processing.",
    ],
    keywords: ["R", "Shiny", "JavaScript", "Processing"],
  },
]

// Newest first, like Experience.
export const community = [
  {
    title: "Amsterdam office events",
    when: "Ongoing",
    text: "Keep the Amsterdam office community lively by hosting and organizing events, from quiz nights and the company Olympic Games to all-day AI game dev hackathons.",
  },
  {
    title: "Talent Growth Team interviews",
    when: "Until 2024",
    text: "Led and took part in cultural and technical interviews for Reaktor's Talent Growth Team.",
  },
  {
    title: "Cultural ambassador, Reaktor Lisbon",
    when: "2022–2023",
    text: "Alongside client work, helped the brand-new Lisbon office grow by taking care of newly hired colleagues and bringing along the established culture and Reaktorian spirit from Amsterdam.",
  },
  {
    title: "Team Build Academy",
    when: "2022",
    text: "Completed Reaktor's Team Build Academy, an internal course on team building, leadership, team dynamics, and communication.",
  },
]

export const education = {
  school: "Budapest University of Technology and Economics",
  degrees: [
    {
      degree: "Computer Engineering MSc",
      start: "2014-01" as YearMonth,
      end: "2016-01" as YearMonth,
    },
    {
      degree: "Computer Engineering BSc",
      start: "2010-09" as YearMonth,
      end: "2014-01" as YearMonth,
    },
  ],
  note: "Theses on data visualization and reusable user interfaces.",
}

export const languages = [
  { language: "Hungarian", level: "Native" },
  { language: "English", level: "Fluent, professional working proficiency" },
]
