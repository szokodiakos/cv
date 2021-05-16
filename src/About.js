import React from "react"
import styled from "styled-components"
import { colors } from "./colors"
import { Description } from "./commonStyled"
import { data } from "./data"
import { Title } from "./Title"

export const About = () => (
  <div style={{ marginBottom: "1em" }}>
    <AboutTitle>
      <h2>✨ About</h2>
    </AboutTitle>

    <Description>{data.about.trim()}</Description>
  </div>
)

const AboutTitle = styled(Title)`
  background-color: ${colors.YELLOW};
  color: ${colors.WHITE};
`
