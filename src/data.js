import { images } from "./images"

export const data = {
  name: "Ákos Szokodi",
  title: "Software Consultant",
  location: "🇳🇱 Amsterdam area",
  profile: images["profile.png"],
  email: "mailto:szokodiakos+cv@gmail.com",
  gitHub: "https://github.com/szokodiakos",
  linkedIn: "https://linkedin.com/in/szokodiakos",
  about: `
Passionate about software quality and design, such as UX design, design patterns, clean coding and testing.

I believe that things should be done as simple as possible with pragmatic approaches and that solutions doesn't always require coding. Hence, I think that nurturing soft-skills is as important -- or maybe more -- as learning hard technical skills as a developer.

I'm happy to work on both backend and frontend, fluent in {Type|Java}Script, although I believe polyglot development is a good philosophy as devs should not be locked into a single language or technology and should always adapt the solution according to the problem.

I like to put my focus on the team rather than myself; I feel that if I can enable trust, joy, better collaboration among team members, the team will be able to achieve great results together.

I'm constantly on the lookout to learn new things, as well as to share things I already know via blog posts or some other form of knowledge sharing.
`,
  workExperience: [
    {
      company: {
        name: "Reaktor",
        logo: images["reaktor.png"],
      },
      title: "Software Consultant",
      where: "Amsterdam 🇳🇱",
      to: "present",
      from: "2018 august",
      keywords: [
        "Node.js",
        "TypeScript",
        "React",
        "SEO",
        "Kafka",
        "Kubernetes",
        "Java",
        "Kotlin",
        "Spring Boot",
        "Jenkins",
        "Postgres",
        "Next.js",
        "React Native"
      ],
      description: `
Working for premium brands across the globe, helping clients achieve their goals.

Some of the projects I've worked on:
- Developed a cross-platform social media application for a televised home shopping company, which features video/text content uploads, interactions, livestreaming and more.

- Participated in a client's Search Engine Optimization (SEO) team where I helped to enable SEO experts to fine tune the e-commerce website's SEO properties for better search ranking. Also built a visual search keyword explorer tool so the SEO experts can make decisions based on keyword trends.

- Laid the foundations of various Kafka-based streaming solutions that sped up data transmission across the whole client's platform globally, improving both customer and operator experience.

- Participated in the introduction of SQL based data storage to help the client steer away from expensive / legacy solutions.

- Created campaign pages for various clothing brands, as well as provided other frontend teams with site data.

- I usually also facilitate various gatherings such as daily standups, retrospectives, trainings.

- I finished an internal several month long training course on team building, leading, dynamics and communication.

When not working for a client, I help the Reaktor Talent Growth Team by both leading and participating in interviews.
`,
    },
    {
      company: {
        name: "Coding Sans",
        logo: images["codingsans.png"],
      },
      title: "Software Developer",
      where: "Budapest 🇭🇺",
      to: "2018 june",
      from: "2015 may",
      keywords: ["Node.js", "TypeScript", "React", "AngularJS"],
      description: `
Developed full stack web applications for various small-to-big companies including social networking, cloud-based healthcare management system, sports betting, innovative sales web and mobile app, marketing-through-SMS solution and email creator/editor web application.

Authored various technology-related posts on the company blog.
`,
    },
    {
      company: {
        name: "Quanopt",
        logo: images["quanopt.png"],
      },
      title: "Junior Software Developer",
      where: "Budapest 🇭🇺",
      to: "2014 august",
      from: "2013 june",
      keywords: ["R", "Shiny", "JavaScript", "Processing"],
      description: `
Developed a web application to capture, save and load data visualizations made with R and Processing.      
`,
    },
  ],
  education: [
    {
      school: "Budapest University of Technology and Economics",
      logo: images["bme.png"],
      degree: "Computer Engineering MSc",
      to: "2016 january",
      from: "2014 january",
    },
    {
      school: "Budapest University of Technology and Economics",
      logo: images["bme.png"],
      degree: "Computer Engineering BSc",
      to: "2014 january",
      from: "2010 september",
    },
  ],
  languageSkills: [
    {
      language: "Hungarian 🇭🇺",
      level: "native 🙌",
    },
    {
      language: "English 🇺🇸",
      level: "fluent 👌",
    },
    {
      language: "German 🇩🇪",
      level: "basic 🤏",
    },
    {
      language: "Dutch 🇳🇱",
      level: "basic 🤏",
    },
  ],
}
