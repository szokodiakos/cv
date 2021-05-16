import styled from "styled-components"
import { colors } from "./colors"
import { NoPaddingUnorderedList } from "./commonStyled"
import { data } from "./data"
import { Title } from "./Title"

export const Language = () => (
  <div style={{ marginBottom: "1em" }}>
    <LanguageTitle>
      <h2>🗣 Language</h2>
    </LanguageTitle>

    <NoPaddingUnorderedList>
      {data.languageSkills.map((language) => (
        <li style={{ listStyleType: "none" }} key={language.language}>
          <LanguageItem {...language}></LanguageItem>
        </li>
      ))}
    </NoPaddingUnorderedList>
  </div>
)

const LanguageTitle = styled(Title)`
  background-color: ${colors.PURPLE};
  color: ${colors.WHITE};
`

const LanguageItem = ({ language, level }) => (
  <>
    <strong>{language}:</strong> {level}
  </>
)
