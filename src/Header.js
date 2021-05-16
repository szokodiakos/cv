import React from "react"
import styled from "styled-components"
import { colors } from "./colors"
import { NoDotUnorderedList } from "./commonStyled"
import { data } from "./data"
import { images } from "./images"
import { Title } from "./Title"

export const Header = () => (
  <>
    <HeaderTitle>
      <h1 style={{ textAlign: "center", marginBottom: "0px" }}>{data.name}</h1>
      <h2 style={{ textAlign: "center", marginTop: "0px" }}>{data.title}</h2>
    </HeaderTitle>

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
      <NoDotUnorderedList style={{ paddingLeft: 10 }}>
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
      </NoDotUnorderedList>
    </div>
  </>
)

const HeaderTitle = styled(Title)`
  background-color: ${colors.GREEN};
  color: ${colors.WHITE};
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

function getAccount(url) {
  return `/${last(url.split("/"))}`
}

function last(arr) {
  return arr[arr.length - 1]
}
