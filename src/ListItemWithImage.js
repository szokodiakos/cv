import styled from "styled-components"

export const ListItemWithImage = ({ image, title, subTitle }) => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <ListImage src={image} alt={title} title={title}></ListImage>

    <div style={{ display: "flex", flexDirection: "column" }}>
      <ListTitle>{title}</ListTitle>
      <ListSubtitle>{subTitle}</ListSubtitle>
    </div>
  </div>
)

const ListImage = styled.img`
  border: 1px solid black;
  border-radius: 18px;
  height: 3em;
`

const ListTitle = styled.h3`
  margin: 0px;
  margin-left: 10px;
`

const ListSubtitle = styled.h4`
  margin: 0px;
  margin-left: 10px;
`
