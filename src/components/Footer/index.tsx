import Facebook from "../../assets/Icons/facebook.svg"
import Twitter from "../../assets/Icons/twitter.svg"
import Youtube from "../../assets/Icons/youtube.svg"
import Pinterest from "../../assets/Icons/pinterest.svg"
import styled from "styled-components"
import Theme from "../../theme"

const FooterGlobal = styled.div`
    background-color: ${Theme.footer};
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const Title = styled.h1`
    font-family: 'Lora', serif;
    font-weight: bold;
    font-size: 1.125rem;
    color: ${Theme.white};
    line-height: 25px;

    @media (max-width: 768px) {
    font-size: 14px;
  }
`

const Links = styled.h3`
     font-family: 'Lora', serif;
    font-weight: 300;
    font-size: .75rem;
    color: ${Theme.background};;

    @media (max-width: 768px) {
    font-size: 10px;
  }
`

const Icons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 18px;

    img{
        @media (max-width: 768px) {
            width: 14px;
        }
    }

`

const Connection = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

const Footer = () => {
  return (
    <FooterGlobal>
        <div>
            <Title>Contact the Publisher</Title>
            <Links>lorem@teste.com</Links>
            <Links>+55 11 99999999</Links>
        </div>
        <div>
            <Title>Explorate</Title>
            <Links>About</Links>
            <Links>Partners</Links>
            <Links>Job Opportunities</Links>
            <Links>Advertise</Links>
            <Links>Membership</Links>
        </div>
        <div>
            <Title>Headquarter</Title>
            <Links>Lorem ipsum</Links>
        </div>
        
        <Connection>
            <Title>Connections</Title>
            <Icons>
                <img src={Facebook} alt="Facebook" />
                <img src={Twitter} alt="Twitter" />
                <img src={Youtube} alt="Youtube" />
                <img src={Pinterest} alt="Pinterest" />
            </Icons>
        </Connection>
    </FooterGlobal>
  )
}

export default Footer
