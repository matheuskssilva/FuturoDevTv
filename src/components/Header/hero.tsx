import styled from "styled-components"
import Theme from "../../theme"

const Modal = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 79px;
    background-color: rgba(12, 12, 12, 0.8); 
    width: 200px;
    height: 65px;

`

const SubTitle = styled.h3`
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 4px;
    text-align: center;
    color: ${Theme.white};
    background-color: ${Theme.grey};
    border-radius: 8px;
    width: 25px;
    height: 6px;
    padding: 3px;
    position: relative;

`
const Text = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 15px;
    font-family: 'Lora', serif;
    color: ${Theme.background};

`

const Title = styled.div`
    font-family: 'Lora', serif;
    font-size: 8px;
    font-weight: bold;
    color: ${Theme.white};

`

const Description = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 5px;
    font-weight: 300;
    gap: 5px;
    width: 180px;

`

const Span = styled.span`
    display: flex;
    align-items: center;
    border-right: 1px solid ${Theme.background};
    padding-right: 5px;
    border-width: 30px;
    height: 1px;
`

const Hero = () => {
  return (
    <Modal>
     <Text>
     <SubTitle>ADVENTURE</SubTitle>
      <Title>lorem impsum lorem ipsum lorem ipsum</Title>
      <Description>
        <Span>08.08.2021</Span>
        <p>Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.</p>
      </Description>
     </Text>
    </Modal>
  )
}

export default Hero
