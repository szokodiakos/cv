import styled from "styled-components/macro"
import { colors } from "./colors"
import { Div, UnorderedList } from "./commonStyled"
import { data } from "./data"
import { Title } from "./Title"

export const Language = () => (
  <Div verticalSpace>
    <LanguageTitle>
      <h2>🗣 Language</h2>
    </LanguageTitle>

    <UnorderedList noPadding noDot indented>
      {data.languageSkills.map((language) => (
        <li key={language.language}>
          <LanguageItem {...language}></LanguageItem>
        </li>
      ))}
    </UnorderedList>
  </Div>
)

const LanguageTitle = styled(Title)`
  background-color: ${colors.PURPLE};
  color: ${colors.WHITE};
`

const LanguageItem = ({ language, level }) => (
  <>
    <strong>{language}</strong> {level}
  </>
)
