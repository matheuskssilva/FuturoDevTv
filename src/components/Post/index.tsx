import styled from "styled-components"
import PostImg from "../../assets/Background/Post.svg"
import Theme from "../../theme"

const ContainerPost = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    margin: 0 auto;
`

const ImgPost = styled.img`
    width: 100%;
    max-width: 152.5rem;
    position: relative;
`

const Title = styled.h1`
    font-family: 'Lora', serif;
    font-weight: bold;
    font-size: 18px;
    color: ${Theme.white};

   
`

const P = styled.p`
     font-family: 'Lora', serif;
     font-weight: 300;
     font-size: 12px;
     color: ${Theme.grey2};
     line-height: 1.25rem;

   
`

const Date = styled.h3`
    font-family: 'Lora', serif;
     font-weight: 300;
     font-size: 12px;
     color: ${Theme.grey2};
     border-top: .0625rem solid ${Theme.background};
     padding-top: .9375rem;
`

const Text = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    position: absolute;
`

const Post = () => {
  return (
    <ContainerPost>
        <ImgPost src={PostImg} alt="" />
      <Text>
      <Title>Lorem ipsum dolor sit amet, consectetur adipiscing elit</Title>
        <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </P>
        <Date>08.08.2021</Date>
      </Text>
    </ContainerPost>
  )
}

export default Post
