import React from "react"
import styled from "styled-components/macro"
import { Basics } from "./Basics"
import { colors } from "./colors"
import { data } from "./data"
import { Title } from "./Title"

export const Header = () => (
  <>
    <HeaderTitle>
      <NameTitle>{data.name}</NameTitle>
      <JobTitle>{data.title}</JobTitle>
    </HeaderTitle>
    <Basics />
  </>
)

const NameTitle = styled.h1`
  margin-bottom: 0;
`

const JobTitle = styled.h2`
  margin-top: 0;
`

const HeaderTitle = styled(Title)`
  text-align: center;
  background-color: ${colors.GREEN};
  color: ${colors.WHITE};
`
