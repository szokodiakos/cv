import React from "react"
import styled from "styled-components/macro"
import { colors } from "./colors"
import { Description, Div } from "./commonStyled"
import { data } from "./data"
import { Title } from "./Title"

export const About = () => (
  <Div verticalSpace>
    <AboutTitle>
      <h2>✨ About</h2>
    </AboutTitle>

    <Description indented>{data.about.trim()}</Description>
  </Div>
)

const AboutTitle = styled(Title)`
  background-color: ${colors.YELLOW};
  color: ${colors.WHITE};
`
