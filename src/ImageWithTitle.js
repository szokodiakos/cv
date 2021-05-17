import styled from "styled-components/macro"

export const ImageWithTitle = ({ image, title, subTitle }) => (
  <Wrapper>
    <ListImage src={image} alt={title} title={title}></ListImage>

    <TitleWrapper>
      <ListTitle>{title}</ListTitle>
      <ListSubtitle>{subTitle}</ListSubtitle>
    </TitleWrapper>
  </Wrapper>
)

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

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
