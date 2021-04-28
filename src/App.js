import React from "react"
import { data } from "./data"

const colors = {
  WHITE: "#FFFFFF",
  GREEN: "#32A995",
  YELLOW: "#F6A008",
  ORANGE: "#F25846",
  RED: "#C4253F",
  PURPLE: "#6138C2",
  BLUE: "#1D74CA",
}

export const App = () => (
  <div
    style={{
      maxWidth: "650px",
      margin: "auto",
      paddingLeft: "25px",
      paddingRight: "25px",
    }}
  >
    <Title style={{ backgroundColor: colors.GREEN, color: colors.WHITE }}>
      <h1 style={{ textAlign: "center", marginBottom: "0px" }}>{data.name}</h1>
      <h2 style={{ textAlign: "center", marginTop: "0px" }}>{data.title}</h2>
    </Title>

    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginTop: "1em",
        marginBottom: "1em",
      }}
    >
      <img src={data.profile} alt="profile" style={{ height: "10em" }}></img>
      <ul>
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
    </div>

    <div style={{ marginBottom: "1em" }}>
      <Title style={{ backgroundColor: colors.YELLOW, color: colors.WHITE }}>
        <h2>✨ About</h2>
      </Title>

      <Paragraph style={{ marginTop: "1em", marginBottom: "1em" }}>
        {data.about.trim()}
      </Paragraph>
    </div>

    <div style={{ marginBottom: "1em" }}>
      <Title style={{ backgroundColor: colors.ORANGE, color: colors.WHITE }}>
        <h2>🛠 Work Experience</h2>
      </Title>

      <ul>
        {data.workExperience.map((work, index) => {
          const isLast = data.workExperience.length === index + 1
          return (
            <li
              key={work.to}
              style={{
                marginBottom: isLast ? "0" : "2em",
                listStyleType: "none",
              }}
            >
              <Work {...work}></Work>
            </li>
          )
        })}
      </ul>
    </div>

    <div style={{ marginBottom: "1em" }}>
      <Title style={{ backgroundColor: colors.RED, color: colors.WHITE }}>
        <h2>🎓 Education</h2>
      </Title>

      <ul>
        {data.education.map((education, index) => {
          const isLast = data.education.length === index + 1

          return (
            <li
              key={education.to}
              style={{
                marginBottom: isLast ? "0" : "2em",
                listStyleType: "none",
              }}
            >
              <Education {...education}></Education>
            </li>
          )
        })}
      </ul>
    </div>

    <div style={{ marginBottom: "1em" }}>
      <Title style={{ backgroundColor: colors.PURPLE, color: colors.WHITE }}>
        <h2>🗣 Language</h2>
      </Title>

      <ul>
        {data.languageSkills.map((language) => (
          <li key={language.language}>
            <Language {...language}></Language>
          </li>
        ))}
      </ul>
    </div>

    <Title style={{ backgroundColor: colors.BLUE, color: colors.WHITE }}>
      <h2 style={{ textAlign: "center" }}>✌️</h2>
    </Title>
  </div>
)

const Title = ({ children, style }) => (
  <div style={{ overflow: "auto" }}>
    <div
      style={{
        position: "absolute",
        left: "0px",
        width: "100%",
        ...style,
      }}
    >
      <div
        style={{ maxWidth: "650px", marginLeft: "auto", marginRight: "auto" }}
      >
        {children}
      </div>
    </div>
    <div style={{ visibility: "hidden" }}>{children}</div>
  </div>
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
  <p {...props} style={{ whiteSpace: "pre-wrap", margin: "0px", ...style }}></p>
)

const Logo = ({ style = {}, ...props }) => (
  <img {...props} style={{ height: "1em", ...style }} alt={props.alt}></img>
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
      <h3 style={{ margin: "0px", marginLeft: "10px" }}>{title}</h3>
      <h4 style={{ margin: "0px", marginLeft: "10px" }}>{subTitle}</h4>
    </div>
  </div>
)
