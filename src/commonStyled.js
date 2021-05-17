import styled, { css } from "styled-components/macro"

export const UnorderedList = styled.ul`
  ${({ noDot }) =>
    noDot &&
    css`
      list-style-type: none;
    `}
  ${({ noPadding }) =>
    noPadding &&
    css`
      padding-left: 0;
    `}
  ${({ indented }) =>
    indented &&
    css`
      margin-left: 60px;
    `}
`

export const ListItem = styled.li`
  ${({ verticalSpace, isLast }) =>
    verticalSpace &&
    css`
      margin-bottom: ${isLast ? "0" : "2em"};
    `}
`

export const Description = styled.p`
  white-space: pre-wrap;
`

export const Div = styled.div`
  ${({ verticalSpace }) =>
    verticalSpace &&
    css`
      margin-bottom: 1em;
    `}
`
