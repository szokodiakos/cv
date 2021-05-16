import styled from "styled-components"
import { colors } from "./colors"
import {
  Description,
  ListItemWithVerticalSpace,
  NoPaddingNoDotIndentedUnorderedList,
  NoPaddingNoDotUnorderedList,
} from "./commonStyled"
import { data } from "./data"
import { isLast } from "./isLast"
import { ListItemWithImage } from "./ListItemWithImage"
import { Title } from "./Title"

export const WorkExperience = () => (
  <div style={{ marginBottom: "1em" }}>
    <WorkExperienceTitle>
      <h2>🛠 Work Experience</h2>
    </WorkExperienceTitle>

    <NoPaddingNoDotUnorderedList>
      {data.workExperience.map((work, index) => {
        return (
          <ListItemWithVerticalSpace
            key={work.to}
            isLast={isLast(data.workExperience, index)}
          >
            <WorkItem {...work}></WorkItem>
          </ListItemWithVerticalSpace>
        )
      })}
    </NoPaddingNoDotUnorderedList>
  </div>
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
    <ListItemWithImage
      image={company.logo}
      title={company.name}
      subTitle={title}
    ></ListItemWithImage>
    <NoPaddingNoDotIndentedUnorderedList>
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
    </NoPaddingNoDotIndentedUnorderedList>
  </>
)

const Keywords = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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
`
