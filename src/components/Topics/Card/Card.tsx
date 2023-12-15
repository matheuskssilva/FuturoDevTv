import styled from "styled-components"
import Theme from "../../../theme"

import profileImg from "../../../assets/people.svg"

const CardContainer = styled.div`
  border: .0625rem solid #ddd;
  margin: .625rem;
  padding: .625rem;
  width: 15.625rem;
  height: 470px;
  background-color: ${Theme.white};
  border-radius: .375rem;
`

const Date = styled.h3`
  font-weight: 300;
  font-size: 12px;
  color: ${Theme.grey2};
`

const Text = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Lora', serif;
`

const Title = styled.h1`
  font-weight: bold;
  font-size: .75rem;
  color: ${Theme.grey};
  line-height: .9375rem;
  margin: 0;

`

const P = styled.p`
  font-weight: 300;
  font-size: 10px;
  color: ${Theme.grey2};
  line-height: 15px;
  margin: 0;
  margin-bottom: .625rem;
  margin-top: 5px;

`

const ProfileTitle = styled.h2`
  font-weight: bold;
  font-size: 10px;
  color: ${Theme.colorprofile};
  margin: 0;

`
const ProfileContent = styled.h2`
  font-weight: 300;
  font-size: 10px;
  color: ${Theme.grey};
  line-height: 1.25rem;
  margin: 0;

  
`


const ProfileImg = styled.img`
  width: 3.125rem;
  height: 3.125rem;
  border-radius: 50%;

`

const Propiles = styled.div`
  display: flex;
  align-items: center;
  padding-top: 1.5625rem;
  border-width: 1.25rem;
  border-top: .0625rem solid ${Theme.background};
`

const ProfileText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-left: 1.125rem;
  flex-direction: column; 
`

const Category = styled.h3`
  font-size: 12px;
  font-weight: bold;
  color: ${Theme.grey};
  border: .0625rem solid ${Theme.background};
  border-radius: .5rem;
  width: 3.125rem;
  padding: .25rem;
  text-align: center;
  margin: .625rem 0 0;
`

interface CardProps  {
  title: string,
  date: string,
  paragrafo: string,
  profileTitle: string,
  profileContent: string,
  imageSrc: string,
  categoria: string,
}
const CardComponents: React.FC<CardProps> = ({
  imageSrc,
  title,
  date,
  paragrafo,
  profileTitle,
  profileContent,
  categoria,
}) => {
  return (
    <CardContainer>
     <Text>
      <img src={imageSrc} alt="dasdad" />
      <Category>{categoria}</Category>
     <Date>{date}</Date>
      <Title>{title}</Title>
      <P>{paragrafo}</P>
     <Propiles>
     <ProfileImg src={profileImg} alt="" />
      <ProfileText>
        <ProfileTitle>{profileTitle}</ProfileTitle>
        <ProfileContent>{profileContent}</ProfileContent>
      </ProfileText>
     </Propiles>
     </Text>
    
    </CardContainer>
  )
}

export default CardComponents
  

