import styled from "styled-components/macro"
import { colors } from "./colors"
import { Description, Div, ListItem, UnorderedList } from "./commonStyled"
import { data } from "./data"
import { isLast } from "./isLast"
import { ImageWithTitle } from "./ImageWithTitle"
import { Title } from "./Title"

export const WorkExperience = () => (
  <Div verticalSpace>
    <WorkExperienceTitle>
      <h2>🛠 Work Experience</h2>
    </WorkExperienceTitle>

    <UnorderedList noPadding noDot>
      {data.workExperience.map((work, index) => {
        return (
          <ListItem
            verticalSpace
            key={work.to}
            isLast={isLast(data.workExperience, index)}
          >
            <WorkItem {...work}></WorkItem>
          </ListItem>
        )
      })}
    </UnorderedList>
  </Div>
)

const WorkExperienceTitle = styled(Title)`
  background-color: ${colors.ORANGE};
  color: ${colors.WHITE};
`

const WorkItem = ({
  company,
  title,
  where,
  to,
  from,
  description,
  keywords,
}) => (
  <>
    <ImageWithTitle
      image={company.logo}
      title={company.name}
      subTitle={title}
    ></ImageWithTitle>
    <UnorderedList noPadding noDot indented>
      <li>
        <strong>{where}</strong>
      </li>
      <li>
        <strong>
          {from} 👉 {to}
        </strong>
      </li>
      <li>
        <Description>{description.trim()}</Description>
      </li>
      <li>
        <Keywords>
          {keywords.map((keyword) => (
            <Keyword key={keyword}>{keyword}</Keyword>
          ))}
        </Keywords>
      </li>
    </UnorderedList>
  </>
)

const Keywords = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  cursor: default;
`

const Keyword = styled.div`
  border: 1px solid ${colors.ORANGE};
  border-radius: 10px;
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 10px;
  padding-right: 10px;
  margin-right: 5px;
  margin-top: 5px;
  font-size: 0.8em;
  transition: 0.1s;

  &:hover {
    background-color: ${colors.ORANGE};
    color: ${colors.WHITE};
  }
`
