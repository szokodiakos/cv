import React from "react"
import { data } from "./data"
import styled from "styled-components"

const colors = {
  WHITE: "#FFFFFF",
  GREEN: "#32A995",
  YELLOW: "#F6A008",
  ORANGE: "#F25846",
  RED: "#C4253F",
  PURPLE: "#6138C2",
  BLUE: "#1D74CA",
}

const maxWidth = 650

const Page = styled.div`
  max-width: ${maxWidth}px;
  margin: auto;
  padding-left: 25px;
  padding-right: 25px;
`

const Paragraph = styled.p`
  white-space: pre-wrap;
  margin: 0px;
`

const ProfilePic = styled.img`
  height: 10em;
`

const Logo = styled.img`
  height: 1em;
`

export const App = () => (
  <Page>
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
      <ProfilePic src={data.profile} alt="profile"></ProfilePic>
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
  </Page>
)

const ActualTitleWrapper = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
`

const ActualTitle = styled.div`
  max-width: ${maxWidth}px;
  margin-left: auto;
  margin-right: auto;
`

const PhantomTitle = styled.div`
  visibility: hidden;
`

const Title = ({ children, style }) => (
  <div style={{ overflow: "auto" }}>
    <ActualTitleWrapper style={style}>
      <ActualTitle>{children}</ActualTitle>
    </ActualTitleWrapper>
    <PhantomTitle>{children}</PhantomTitle>
  </div>
)

const InnerListItem = styled.li`
  margin-left: 38px;
`

const Work = ({ company, title, where, to, from, description, keywords }) => (
  <>
    <ListItem
      image={company.logo}
      title={company.name}
      subTitle={title}
    ></ListItem>
    <ul>
      <InnerListItem>{where}</InnerListItem>
      <InnerListItem>
        {from} 👉 {to}
      </InnerListItem>
      <InnerListItem>
        <Paragraph>{description.trim()}</Paragraph>
      </InnerListItem>
      <InnerListItem>Keywords: {keywords.join(", ")}</InnerListItem>
    </ul>
  </>
)

const Education = ({ school, logo, degree, to, from }) => (
  <>
    <ListItem image={logo} title={school} subTitle={degree}></ListItem>
    <ul>
      <InnerListItem>
        {from} 👉 {to}
      </InnerListItem>
    </ul>
  </>
)

const Language = ({ language, level }) => (
  <>
    {language}: {level}
  </>
)

const ListImage = styled.img`
  border: 1px solid black;
  border-radius: 10px;
  height: 3em;
`

const ListTitle = styled.h3`
  margin: 0;
  margin-left: 10px;
`

const ListSubtitle = styled.h4`
  margin: 0;
  margin-left: 10px;
`

const ListItem = ({ image, title, subTitle }) => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <ListImage src={image} alt={title} title={title}></ListImage>

    <div style={{ display: "flex", flexDirection: "column" }}>
      <ListTitle>{title}</ListTitle>
      <ListSubtitle>{subTitle}</ListSubtitle>
    </div>
  </div>
)
