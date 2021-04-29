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
const borderRadius = 18

const Page = styled.div`
  max-width: ${maxWidth}px;
  margin: auto;
  padding-left: 25px;
  padding-right: 25px;
`

const Paragraph = styled.p`
  white-space: pre-wrap;
`

const Span = styled.span`
  white-space: pre-wrap;
`

const ProfilePic = styled.img`
  height: 10em;
  border-radius: ${borderRadius}px;
`

const Logo = styled.img`
  height: 1em;
`

const ListItem = styled.li`
  margin-bottom: ${({ isLast }) => (isLast ? "0" : "2em")};
  list-style-type: none;
`

const InnerListItem = styled.li`
  margin-left: 78px;

  &:before {
    display: inline-block;
    content: "■";
    margin-left: -17px;
    padding-right: 8px;
  }
`

const UnorderedList = styled.ul`
  padding-left: 0px;
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
        justifyContent: "center",
        marginTop: "1em",
        marginBottom: "1em",
      }}
    >
      <ProfilePic src={data.profile} alt="profile"></ProfilePic>
      <UnorderedList>
        <InnerListItem>{data.location}</InnerListItem>
        <InnerListItem>
          <a href={data.email}>💌 Email</a>
        </InnerListItem>
        <InnerListItem>
          <a href={data.gitHub}>
            <Logo src="github.png" alt="github"></Logo> GitHub
          </a>
        </InnerListItem>
        <InnerListItem>
          <a href={data.linkedIn}>
            <Logo src="linkedin.png" alt="linkedin"></Logo> LinkedIn
          </a>
        </InnerListItem>
      </UnorderedList>
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

      <UnorderedList>
        {data.workExperience.map((work, index) => {
          return (
            <ListItem key={work.to} isLast={isLast(data.workExperience, index)}>
              <Work {...work}></Work>
            </ListItem>
          )
        })}
      </UnorderedList>
    </div>

    <div style={{ marginBottom: "1em" }}>
      <Title style={{ backgroundColor: colors.RED, color: colors.WHITE }}>
        <h2>🎓 Education</h2>
      </Title>

      <UnorderedList>
        {data.education.map((education, index) => {
          return (
            <ListItem key={education.to} isLast={isLast(data.education, index)}>
              <Education {...education}></Education>
            </ListItem>
          )
        })}
      </UnorderedList>
    </div>

    <div style={{ marginBottom: "1em" }}>
      <Title style={{ backgroundColor: colors.PURPLE, color: colors.WHITE }}>
        <h2>🗣 Language</h2>
      </Title>

      <UnorderedList>
        {data.languageSkills.map((language) => (
          <InnerListItem key={language.language}>
            <Language {...language}></Language>
          </InnerListItem>
        ))}
      </UnorderedList>
    </div>

    <Title style={{ backgroundColor: colors.BLUE, color: colors.WHITE }}>
      <h2 style={{ textAlign: "center" }}>✌️</h2>
    </Title>
  </Page>
)

function isLast(array, index) {
  return array.length === index + 1
}

const ActualTitleWrapper = styled.div`
  position: absolute;
  left: 0px;
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

const Work = ({ company, title, where, to, from, description, keywords }) => (
  <>
    <ListItemWithImage
      image={company.logo}
      title={company.name}
      subTitle={title}
    ></ListItemWithImage>
    <UnorderedList>
      <InnerListItem>{where}</InnerListItem>
      <InnerListItem>
        {from} 👉 {to}
      </InnerListItem>
      <InnerListItem>
        <Span>{description.trim()}</Span>
      </InnerListItem>
      <InnerListItem>Keywords: {keywords.join(", ")}</InnerListItem>
    </UnorderedList>
  </>
)

const Education = ({ school, logo, degree, to, from }) => (
  <>
    <ListItemWithImage
      image={logo}
      title={school}
      subTitle={degree}
    ></ListItemWithImage>
    <UnorderedList>
      <InnerListItem>
        {from} 👉 {to}
      </InnerListItem>
    </UnorderedList>
  </>
)

const Language = ({ language, level }) => (
  <>
    {language}: {level}
  </>
)

const ListImage = styled.img`
  border: 1px solid black;
  border-radius: ${borderRadius}px;
  height: 3em;
`

const ListTitle = styled.h3`
  margin: 0px;
  margin-left: 10px;
`

const ListSubtitle = styled.h4`
  margin: 0px;
  margin-left: 10px;
`

const ListItemWithImage = ({ image, title, subTitle }) => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <ListImage src={image} alt={title} title={title}></ListImage>

    <div style={{ display: "flex", flexDirection: "column" }}>
      <ListTitle>{title}</ListTitle>
      <ListSubtitle>{subTitle}</ListSubtitle>
    </div>
  </div>
)
