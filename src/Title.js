import React from "react"
import styled from "styled-components"
import { maxWidth } from "./constants"

export const Title = ({ children, className }) => (
  <div style={{ overflow: "auto" }}>
    <ActualTitleWrapper className={className}>
      <ActualTitle>{children}</ActualTitle>
    </ActualTitleWrapper>
    <PhantomTitle>{children}</PhantomTitle>
  </div>
)

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
