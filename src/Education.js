import styled from "styled-components"
import { colors } from "./colors"
import {
  NoPaddingNoDotUnorderedList,
  ListItemWithVerticalSpace,
  NoPaddingNoDotIndentedUnorderedList,
} from "./commonStyled"
import { data } from "./data"
import { isLast } from "./isLast"
import { ListItemWithImage } from "./ListItemWithImage"
import { Title } from "./Title"

export const Education = () => (
  <div style={{ marginBottom: "1em" }}>
    <EducationTitle>
      <h2>🎓 Education</h2>
    </EducationTitle>

    <NoPaddingNoDotUnorderedList>
      {data.education.map((education, index) => {
        return (
          <ListItemWithVerticalSpace
            key={education.to}
            isLast={isLast(data.education, index)}
          >
            <EducationItem {...education}></EducationItem>
          </ListItemWithVerticalSpace>
        )
      })}
    </NoPaddingNoDotUnorderedList>
  </div>
)

const EducationTitle = styled(Title)`
  background-color: ${colors.RED};
  color: ${colors.WHITE};
`

const EducationItem = ({ school, logo, degree, to, from }) => (
  <>
    <ListItemWithImage
      image={logo}
      title={school}
      subTitle={degree}
    ></ListItemWithImage>
    <NoPaddingNoDotIndentedUnorderedList>
      <li>
        <strong>
          {from} 👉 {to}
        </strong>
      </li>
    </NoPaddingNoDotIndentedUnorderedList>
  </>
)
