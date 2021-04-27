import React from "react"
import { data } from "./data"

export const App = () => (
  <>
    <h1>
      📝 {data.name} - {data.title} CV
    </h1>

    <img src={data.profile} alt="profile"></img>

    <ul style={{ marginBottom: "3em" }}>
      <li>{data.location}</li>
      <li>
        <a href={data.email}>💌 Email</a>
      </li>
      <li>
        <a href={data.gitHub}>
          <Logo src="github.png" alt="github"></Logo> GitHub
        </a>
      </li>
      <li>
        <a href={data.linkedIn}>
          <Logo src="linkedin.png" alt="linkedin"></Logo> LinkedIn
        </a>
      </li>
    </ul>

    <h2>✨ About</h2>

    <Paragraph style={{ marginBottom: "3em" }}>{data.about.trim()}</Paragraph>

    <h2>🛠 Work Experience</h2>

    <ul>
      {data.workExperience.map((work) => (
        <li key={work.to} style={{ marginBottom: "3em" }}>
          <Work {...work}></Work>
        </li>
      ))}
    </ul>

    <h2>🎓 Education</h2>

    <ul>
      {data.education.map((education) => (
        <li key={education.to} style={{ marginBottom: "3em" }}>
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

const Work = ({ company, title, where, to, from, description, keywords }) => (
  <>
    <ImageAndTitle
      image={company.logo}
      title={company.name}
      subTitle={title}
    ></ImageAndTitle>
    <ul>
      <li>{where}</li>
      <li>
        {from} 👉 {to}
      </li>
      <li>
        <Paragraph>{description.trim()}</Paragraph>
      </li>
      <li>Keywords: {keywords.join(", ")}</li>
    </ul>
  </>
)

const Education = ({ school, logo, degree, to, from }) => (
  <>
    <ImageAndTitle
      image={logo}
      title={school}
      subTitle={degree}
    ></ImageAndTitle>
    <ul>
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

const Paragraph = ({ style = {}, ...props }) => (
  <p {...props} style={{ ...style, whiteSpace: "pre-wrap" }}></p>
)

const Logo = ({ style = {}, ...props }) => (
  <img {...props} style={{ ...style, height: "1em" }} alt={props.alt}></img>
)

const ImageAndTitle = ({ image, title, subTitle }) => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <img
      src={image}
      alt={title}
      title={title}
      style={{ border: "1px solid black", borderRadius: "10px", height: "3em" }}
    ></img>

    <div style={{ display: "flex", flexDirection: "column" }}>
      <h3 style={{ margin: 0, marginLeft: 10 }}>{title}</h3>
      <h4 style={{ margin: 0, marginLeft: 10 }}>{subTitle}</h4>
    </div>
  </div>
)
