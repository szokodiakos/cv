import styled from "styled-components/macro"
import { colors } from "./colors"
import { ListItem, UnorderedList, Div } from "./commonStyled"
import { data } from "./data"
import { isLast } from "./isLast"
import { ImageWithTitle } from "./ImageWithTitle"
import { Title } from "./Title"

export const Education = () => (
  <Div verticalSpace>
    <EducationTitle>
      <h2>🎓 Education</h2>
    </EducationTitle>

    <UnorderedList noPadding noDot>
      {data.education.map((education, index) => {
        return (
          <ListItem
            verticalSpace
            key={education.to}
            isLast={isLast(data.education, index)}
          >
            <EducationItem {...education}></EducationItem>
          </ListItem>
        )
      })}
    </UnorderedList>
  </Div>
)

const EducationTitle = styled(Title)`
  background-color: ${colors.RED};
  color: ${colors.WHITE};
`

const EducationItem = ({ school, logo, degree, to, from }) => (
  <>
    <ImageWithTitle
      image={logo}
      title={school}
      subTitle={degree}
    ></ImageWithTitle>
    <UnorderedList noPadding noDot indented>
      <li>
        <strong>
          {from} 👉 {to}
        </strong>
      </li>
    </UnorderedList>
  </>
)
