import styled from "styled-components/macro"
import { colors } from "./colors"
import { Title } from "./Title"

export const Footer = () => (
  <FooterTitle>
    <h2>✌️</h2>
  </FooterTitle>
)

const FooterTitle = styled(Title)`
  text-align: center;
  background-color: ${colors.BLUE};
  color: ${colors.WHITE};
`
