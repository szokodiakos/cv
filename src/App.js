import React from "react"
import { data } from "./data"
import styled from "styled-components"
import { colors } from "./colors"
import { images } from "./images"

const maxWidth = 650

const Page = styled.div`
  max-width: ${maxWidth}px;
  margin: auto;
  padding-left: 25px;
  padding-right: 25px;
`

const Description = styled.p`
  white-space: pre-wrap;
  margin-top: 1.5em;
  margin-bottom: 1.5em;
`

const ProfilePic = styled.img`
  height: 10em;
  border-radius: 18px;
`

const SquareLogo = styled.img`
  height: 1em;
  padding-left: 1px;
  padding-right: 5px;
`

const NoDotListItem = styled.li`
  list-style-type: none;
`

const ListItem = styled(NoDotListItem)`
  margin-bottom: ${({ isLast }) => (isLast ? "0" : "2em")};
`

const UnorderedList = styled.ul`
  padding-left: 0px;
`

function getAccount(url) {
  return `/${last(url.split("/"))}`
}

function last(arr) {
  return arr[arr.length - 1]
}

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
      <ProfilePic src={images[data.profile]} alt="profile"></ProfilePic>
      <ul>
        <li>{data.location}</li>
        <li>
          ✉️ <a href={data.email}>Email</a>
        </li>
        <li>
          <SquareLogo src={images["github.png"]} alt="github"></SquareLogo>{" "}
          <a href={data.gitHub}>{getAccount(data.gitHub)}</a>
        </li>
        <li>
          <SquareLogo src={images["linkedin.png"]} alt="linkedin"></SquareLogo>{" "}
          <a href={data.linkedIn}>{getAccount(data.linkedIn)}</a>
        </li>
      </ul>
    </div>

    <div style={{ marginBottom: "1em" }}>
      <Title style={{ backgroundColor: colors.YELLOW, color: colors.WHITE }}>
        <h2>✨ About</h2>
      </Title>

      <Description>{data.about.trim()}</Description>
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
          <li style={{ listStyleType: "none" }} key={language.language}>
            <Language {...language}></Language>
          </li>
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
  max-width: ${maxWidth + 25}px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 25px;
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

const IndentedListItem = styled.li`
  margin-left: 60px;
  list-style-type: none;
`

const Keywords = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const Keyword = styled.div`
  border: 1px solid ${colors.ORANGE};
  border-radius: 10px;
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 10px;
  padding-right: 10px;
  margin-right: 5px;
  margin-top: 5px;
  font-size: 0.8em;
`

const Work = ({ company, title, where, to, from, description, keywords }) => (
  <>
    <ListItemWithImage
      image={company.logo}
      title={company.name}
      subTitle={title}
    ></ListItemWithImage>
    <UnorderedList>
      <IndentedListItem>
        <strong>{where}</strong>
      </IndentedListItem>
      <IndentedListItem>
        <strong>
          {from} 👉 {to}
        </strong>
      </IndentedListItem>
      <IndentedListItem>
        <Description>{description.trim()}</Description>
      </IndentedListItem>
      <IndentedListItem>
        <Keywords>
          {keywords.map((keyword) => (
            <Keyword key={keyword}>{keyword}</Keyword>
          ))}
        </Keywords>
      </IndentedListItem>
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
      <IndentedListItem>
        <strong>
          {from} 👉 {to}
        </strong>
      </IndentedListItem>
    </UnorderedList>
  </>
)

const Language = ({ language, level }) => (
  <>
    <strong>{language}:</strong> {level}
  </>
)

const ListImage = styled.img`
  border: 1px solid black;
  border-radius: 18px;
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
    <ListImage src={images[image]} alt={title} title={title}></ListImage>

    <div style={{ display: "flex", flexDirection: "column" }}>
      <ListTitle>{title}</ListTitle>
      <ListSubtitle>{subTitle}</ListSubtitle>
    </div>
  </div>
)
