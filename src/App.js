import React from "react"
import { data } from "./data"

const preWrap = { whiteSpace: "pre-wrap" }

export const App = () => (
  <>
    <h1>CV - {data.name}</h1>

    <img src={data.profile} alt="profile"></img>

    <ul>
      <li>
        <a href={data.email}>💌 Email</a>
      </li>
      <li>
        <a href={data.gitHub}>
          <img src="github.png" alt="github"></img> GitHub
        </a>
      </li>
      <li>
        <a href={data.linkedIn}>
          <img src="linkedin.png" alt="linkedin"></img> LinkedIn
        </a>
      </li>
    </ul>

    <p style={preWrap}>{data.intro.trim()}</p>

    <h2>🛠 Work Experience</h2>

    <ul>
      {data.workExperience.map((work) => (
        <li key={work.to}>
          <Work {...work}></Work>
        </li>
      ))}
    </ul>

    <h2>🎓 Education</h2>

    <ul>
      {data.education.map((education) => (
        <li key={education.to}>
          <Education {...education}></Education>
        </li>
      ))}
    </ul>

    <h2>🗣 Language</h2>

    <ul>
      {data.languageSkills.map((language) => (
        <li key={language.language}>
          <Language {...language}></Language>
        </li>
      ))}
    </ul>
  </>
)

const Work = ({ company, where, to, from, description, keywords }) => (
  <>
    <img src={company.logo} alt={company.name}></img>

    <h3>{company.name}</h3>

    <ul>
      <li>{where}</li>
      <li>
        {from} 👉 {to}
      </li>
      <li>
        <p style={preWrap}>{description.trim()}</p>
      </li>
      <li>Keywords: {keywords.join(", ")}</li>
    </ul>
  </>
)

const Education = ({ school, logo, degree, to, from }) => (
  <>
    <img src={logo} alt={school}></img>

    <h3>{degree}</h3>

    <ul>
      <li>{school}</li>
      <li>
        {from} 👉 {to}
      </li>
    </ul>
  </>
)

const Language = ({ language, level }) => (
  <>
    {language}: {level}
  </>
)
