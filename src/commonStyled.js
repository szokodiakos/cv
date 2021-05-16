import styled, { css } from "styled-components"

export const noDotCss = css`
  list-style-type: none;
`

export const noPaddingLeftCss = css`
  padding-left: 0px;
`

export const NoDotUnorderedList = styled.ul`
  ${noDotCss}
`

export const NoPaddingNoDotUnorderedList = styled.ul`
  ${noPaddingLeftCss}
  ${noDotCss}
`

export const NoPaddingNoDotIndentedUnorderedList = styled.ul`
  ${noPaddingLeftCss}
  ${noDotCss}
  margin-left: 60px;
`

export const NoPaddingUnorderedList = styled.ul`
  ${noPaddingLeftCss}
`

export const ListItemWithVerticalSpace = styled.li`
  margin-bottom: ${({ isLast }) => (isLast ? "0" : "2em")};
`

export const Description = styled.p`
  white-space: pre-wrap;
`
