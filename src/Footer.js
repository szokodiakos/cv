import styled from "styled-components"
import { colors } from "./colors"
import { Title } from "./Title"

export const Footer = () => (
  <FooterTitle>
    <h2 style={{ textAlign: "center" }}>✌️</h2>
  </FooterTitle>
)

const FooterTitle = styled(Title)`
  background-color: ${colors.BLUE};
  color: ${colors.WHITE};
`
