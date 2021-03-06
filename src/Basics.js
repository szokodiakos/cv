import styled from "styled-components/macro"
import { images } from "./images"
import * as S from "./commonStyled"
import { Anchor } from "./Anchor"
import { data } from "./data"

export const Basics = () => (
  <Wrapper>
    <ProfilePic src={data.profile} alt="profile"></ProfilePic>
    <UnorderedList noDot>
      <li>{data.location}</li>
      <li>
        ✉️ <Anchor href={data.email}>Email</Anchor>
      </li>
      <li>
        <SquareLogo src={images["github.png"]} alt="github"></SquareLogo>{" "}
        <Anchor href={data.gitHub}>{getAccount(data.gitHub)}</Anchor>
      </li>
      <li>
        <SquareLogo src={images["linkedin.png"]} alt="linkedin"></SquareLogo>{" "}
        <Anchor href={data.linkedIn}>{getAccount(data.linkedIn)}</Anchor>
      </li>
    </UnorderedList>
  </Wrapper>
)

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1em;
  margin-bottom: 1em;
`

const UnorderedList = styled(S.UnorderedList)`
  padding-left: 10px;
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
